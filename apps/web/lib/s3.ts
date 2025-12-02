import { S3Client } from "@aws-sdk/client-s3";

export function createS3Client() {
  const region = process.env.AWS_REGION;
  if (!region) {
    throw new Error("AWS_REGION is not configured");
  }

  return new S3Client({
    region,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? "",
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? ""
    }
  });
}
