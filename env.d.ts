declare namespace NodeJS {
	interface ProcessEnv {
        NODE_ENV: 'dev' | 'prod' | 'test';
		PORT: number;
		CORS_ORIGIN: string;
		LOGGING_DIRECTORY: string;
	}
}
