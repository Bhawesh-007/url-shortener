import express, { urlencoded } from "express";
import connectDB from "./database/index.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("connected successfully");
    });
  })
  .catch((err) => {
    console.log("error", err);
  });
