import express from "express";
import cors from "cors";
import helmet from "helmet";

import { env } from "./env";

const app = express();
app.use(
	express.json(),
	cors({
		origin: env.CORS_ORIGIN,
		methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
		allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
	}),
	helmet({
		xPoweredBy: true,
	}),
);

export default app;
