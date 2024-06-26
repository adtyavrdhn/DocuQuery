import { Pinecone } from "@pinecone-database/pinecone";

export const getPineconeClient = async () => {
  // const client = new PineconeClient();

  // await client.init({
  //   apiKey: process.env.PINECONE_API_KEY!,
  //   environment: "us-east1-gcp",
  // });

  // return client;

  const client = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY!,
    // environment: "us-east1-gcp",
    environment: "us-central1",
  });

  return client;
};
