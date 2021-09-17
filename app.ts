import dotenv from "dotenv";
import express from "express";

dotenv.config();

export const app = express();

app.get("/", (_, res) => {
  res.json("hello world!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
