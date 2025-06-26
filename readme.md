# Node Starter Project
This project serves as an example for an Express REST API. 

## Setup TypeScript

1. Install TypeScript: `npm install -D typescript @types/node ts-node`
2. Create a configuration file for typescript: `tsconfig.json` 
3. Add build script: `"build": "tsc"`

## HTTP Server (Express)

1. Install Express: `npm install express`
2. Install Express types: `npm install -D @types/express`

## Local server with hot reload (Nodemon)

1. Install nodemon: `npm install -D nodemon`
2. Create a config file: `nodemon.json`
3. Add the script to serve the project: `"dev": "nodemon"`
4. Make sure nodemon is in watch mode

## Environment Variables (Dotenv)

1. Install dotenv: `npm install dotenv`
2. Install cross-env to handle environment variable injection `npm install -D cross-env`
2. Create an `.env` file for local developpement, also for production ...
4. Add typing to the env variables in `env.d.ts`
5. Optionnal: export all variables in a separate file `config/env.ts`

## Dockerize the application
1. Create a `Dockerfile` to build an image of the project
2. Create a `docker-compose.yml` to build the application as a service

## Cors configuration

1. Install cors middleware `npm install cors`
2. Add the cors middleware to the main
3. Optionnal: you can add a list of authorized origins to consume the API

## Logger

1. Install winston logger `npm install winston`
2. Create a logger configuration file under `config/`
3. Add a path for the logging directory en `.env` files
