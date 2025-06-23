import path from "path";
import { createLogger, format, transports } from "winston";
import { env } from "./env";

const errorLogs = path.join(env.LOGGING_DIRECTORY, "error.log");

const logger = createLogger({
	level: "info",
	format: format.combine(
		format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
		format.errors({ stack: true }),
		format.json()
	),
	transports: [
		new transports.Console({
			format: format.combine(
                format.colorize(), 
                format.simple(),
            ),
		}),
		new transports.File({ filename: errorLogs, level: "error" }),
	],
});

export default logger;
