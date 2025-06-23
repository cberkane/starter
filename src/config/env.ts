import dotenv from "dotenv";
import path from "path";

const envFile = process.env.NODE_ENV || "dev";
dotenv.config({
    path: path.resolve(process.cwd(), `.env.${envFile}`),
});

export const env = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || "dev",
    CORS_ORIGIN: process.env.CORS_ORIGIN,
    LOGGING_DIRECTORY: process.env.LOGGING_DIRECTORY || "logs",
};