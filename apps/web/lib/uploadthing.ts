import { createUploadthing, type FileRouter, createRouteHandler } from "uploadthing/next";

const f = createUploadthing();

export const fileRouter = {
  imageUploader: f({ image: { maxFileSize: "8MB" } }).onUploadComplete(async ({ file }) => {
    console.log("Uploaded", file.url);
  })
} satisfies FileRouter;

export type AppFileRouter = typeof fileRouter;

export const { GET, POST } = createRouteHandler({
  router: fileRouter
});
