import { TransformersEmbeddingFunction, ChromaClient } from "chromadb";

const client = new ChromaClient();

const embedder = new TransformersEmbeddingFunction();

console.log("debug 1...");
try {
  const collection = await client.createCollection({
    name: "my_collection1",
    embeddingFunction: embedder,
  });
} catch (e) {}

console.log("debug 2...");
await client.listCollections();
console.log("debug 3...");
