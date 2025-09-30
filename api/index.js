import dotenv from "dotenv";
import connectToDB from "../src/db/dbConnect.js";
import app from "../src/app.js";

dotenv.config();

// For Vercel serverless functions
export default async function handler(req, res) {
    // Try to connect to DB
    try {
        await connectToDB();
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection failed:", error);
        // Continue without DB for now
    }

    // Handle the request with Express app
    return app(req, res);
}
