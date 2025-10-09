import express from "express";
import { connectDB } from "./DB/index.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const PORT = process.env.PORT;
const startServer = async () => {
  try {
    const conn = await connectDB();
    app.listen(PORT, () => {
      console.log("Server started succesfully on port 8000");
    });
  } catch (error) {
    console.error(error);
  }
};
startServer();
