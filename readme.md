# Node Starter Project

This repository provides a boilerplate for building a RESTful API using Express.
It includes essential packages and configurations suited for production-ready applications.
It comes with a clean and organized structure to kickstart your development.

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

## Main Packages

The project includes the following core packages:

- **`nodemon`** – Enables live reloading for local development.
- **`dotenv`** & **`cross-env`** – Manages environment variables across environments.
- **`cors`** – Configures Cross-Origin Resource Sharing policies.
- **`helmet`** – Enhances security by setting appropriate HTTP headers.
- **`jest`** – Framework for unit testing.
- **`express-rate-limit`** – Applies rate limiting to incoming requests when needed.
- **`cookie-parser`** – Parses and handles cookie headers.
- **`winston`** – Logging library for customizable logs.
- **`eslint`** – Enforces consistent code quality through linting.
- **`husky`** – Manages Git hooks (e.g., pre-commit checks).
- **`swagger`** – Generates and serves interactive API documentation.
- **`zod`** – Schema-based validation for request data.
