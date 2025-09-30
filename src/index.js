import dotenv from "dotenv";
import connectToDB from "./db/dbConnect.js";
import app from "./app.js";

dotenv.config();

// For Vercel deployment, we need to export the app
export default app;

// For local development, start the server
if (process.env.NODE_ENV !== "production") {
    connectToDB()
        .then(() => {
            app.listen(process.env.PORT || 8000, () => {
                console.log(`Server is listening on: ${process.env.PORT}`);
            });
        })
        .catch((error) => console.log("MONGODB connection failed!!!: ", error));
} else {
    // For production, try to connect to DB but don't block the app
    connectToDB()
        .then(() => {
            console.log("MongoDB connected successfully in production");
        })
        .catch((error) => {
            console.log("MONGODB connection failed in production: ", error);
            // Don't exit, let the app run without DB for now
        });
}

/**import express from 'express'
const app = express()

( async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("Error", error);
        throw error
    }
})()
**/
