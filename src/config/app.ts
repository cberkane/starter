import express from "express";
import cors from "cors";
import helmet from "helmet";

import swaggerDocument from "./../../swagger.json";
import { serve, setup  } from "swagger-ui-express";
import { env } from "./env";

const app = express();
app.use(express.json());
app.use(helmet());
app.use(
	cors({
		origin: env.CORS_ORIGIN,
		methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
		allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
	})
);
app.use("/api-docs", serve, setup(swaggerDocument));

export default app;
