# Node Starter Project

This project serves as an example for an Express server as REST API.
It contains all the packages for a production-grade project.
It also provides a basic structure to start your project.

## Project Structure

```
src/
├── config/         # App configuration
├── controllers/    # Route handlers
├── middlewares/    # Custom middlewares
├── routes/         # API routes
├── services/       # Business logic
├── types/          # TypeScript types
└── tests/          # Unit tests
```

## Main packages

- `nodemon`: to serve the project locally
- `dotenv` and `cross-env`: to handle environment variables
- `cors`: to configure cors policy
- `helmet`: to secure the server by setting HTTP headers
- `jest`: to perform unit tests
- `express-rate-limit`: to add a rate limiter to request, if needed
- `cookie-parser`: to parse cookie headers and set cookies
- `winston`: to create logs
- `eslint`: to lint the codebase
- `husky`: to perform commit hooks
- `swagger`: to document routes
- `zod`: to perform data validation

## 1. TypeScript Setup

1. Install TypeScript: `npm install -D typescript @types/node ts-node`
2. Create a configuration file for typescript: `tsconfig.json`
3. Add build script: `"build": "tsc"`

## 2. HTTP Server (Express)

1. Install Express: `npm install express`
2. Install Express types: `npm install -D @types/express`

## 3. Local server with hot reload (Nodemon)

1. Install nodemon: `npm install -D nodemon`
2. Create a config file: `nodemon.json`
3. Add the script to serve the project: `"dev": "nodemon"`
4. Make sure nodemon is in watch mode

## 4. Environment Variables (Dotenv)

1. Install dotenv: `npm install dotenv`
2. Install cross-env to handle environment variable injection `npm install -D cross-env`
3. Create an `.env` file for local developpement, also for production ...
4. Add typing to the env variables in `env.d.ts`
5. Optionnal: export all variables in a separate file `config/env.ts`

## 5. Dockerization

1. Create a `Dockerfile` to build an image of the project
2. Create a `docker-compose.yml` to build the application as a service

## 6. Security

### 6.1 CORS

1. Install cors middleware `npm install cors`
2. Add the cors middleware to the main app
3. Optionnal: you can add a list of authorized origins to connect with the API

### 6.2 Helmet

1. Install helmet middleware `npm install helmet`
2. Add the helmet middleware to the main app

### 6.3 Rate limiting

1. Install the rate limiter package `npm install express-rate-limit`
2. Add middlewares to handle rate limiting, under `middlewares/rate-limiter.ts`

## 8. Logging

1. Install winston logger `npm install winston`
2. Create a logger configuration file under `config/`
3. Add a path for the logging directory en `.env` files

## 9. Unit testing

1. Install jest and jest types `npm install -D jest @types/jest`
2. Add jest types to the compiler
3. Add configuration so jest can scan the right folders
4. Add the script to launch unit testing: `"test": "jest"`

## 10. Linting & pre-commit hooks

1. Install eslint: `npm install --save-dev eslint`
2. Execute `npx eslint init` to add a config file: `eslint.config.mjs`
3. Install husky to trigger commit hooks
4. Add a commit hook to trigger linting and testing before each commit
