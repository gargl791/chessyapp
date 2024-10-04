import express from "express";
import ViteExpress from "vite-express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config()

const PORT = process.env.PORT
const MONGOURI = process.env.MONGO_URI || ""

mongoose.connect(MONGOURI).then( () => {
  console.log("MongoDB connected successfully")
})

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

ViteExpress.listen(app, PORT, () =>
  console.log(`Server is running on port ${PORT}`),
);
