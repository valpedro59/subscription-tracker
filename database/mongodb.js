import mongoose from "mongoose";
import { MONGO_URI, NODE_ENV } from "../config/env.js";

if (!MONGO_URI) {
  throw new Error("Define the MONGO_URI env variable inside .env.edv or prod");
}

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to Mongo DB");
  } catch (error) {
    console.error("Error connecting to the database", error);
  }
};
