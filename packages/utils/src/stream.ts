import { OpenAI } from "openai";
import { createParser, ParsedEvent, ReconnectInterval } from "eventsource-parser";

type StreamHandler = (delta: string) => void;

export async function streamOpenAIChat({
  apiKey,
  messages,
  onDelta
}: {
  apiKey: string;
  messages: OpenAI.Chat.ChatCompletionMessageParam[];
  onDelta: StreamHandler;
}) {
  const client = new OpenAI({ apiKey });
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    stream: true,
    messages
  });

  for await (const chunk of response) {
    const content = chunk.choices[0]?.delta?.content;
    if (typeof content === "string") {
      onDelta(content);
    } else if (Array.isArray(content)) {
      content.forEach((part) => {
        if (part.type === "text" && part.text) onDelta(part.text);
      });
    }
  }
}

export async function streamFromSSE(response: Response, onDelta: StreamHandler) {
  const reader = response.body?.getReader();
  if (!reader) return;

  const parser = createParser((event: ParsedEvent | ReconnectInterval) => {
    if ("data" in event && event.type === "event" && event.data !== "[DONE]") {
      onDelta(event.data);
    }
  });

  const decoder = new TextDecoder();
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    parser.feed(decoder.decode(value));
  }
}
