import express from "express";
import ViteExpress from "vite-express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file

var __dirname = path.resolve(path.dirname(__filename), "../../dist");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGOURI = process.env.MONGO_URI || "";

app.use(express.static(__dirname));

mongoose.connect(MONGOURI).then(() => {
  console.log("MongoDB connected successfully");
});

app.get("/api", (req, res) => {
  // stuff to do with the API
});

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

ViteExpress.listen(app, PORT, () =>
  console.log(`Server is running on port ${PORT}`),
);
