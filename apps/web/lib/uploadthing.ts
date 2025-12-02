import { createUploadthing, type FileRouter } from "uploadthing/next";
import { createNextRouteHandler } from "uploadthing/next-legacy";

const f = createUploadthing();

export const fileRouter = {
  imageUploader: f({ image: { maxFileSize: "8MB" } }).onUploadComplete(async ({ file }) => {
    console.log("Uploaded", file.url);
  })
} satisfies FileRouter;

export type AppFileRouter = typeof fileRouter;

export const { GET, POST } = createNextRouteHandler({
  router: fileRouter
});
