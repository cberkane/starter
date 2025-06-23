# Node Starter Project

## Setup TypeScript

1. Install TypeScript: `npm install -D typescript @types/node ts-node`
2. Create `tsconfig.json` file
3. Add build script: `"build": "tsc"`

## Express Server

1. Install Express: `npm install express`
2. Install Express types: `npm install -D @types/express`

## Nodemon

3. Install nodemon: `npm install -D nodemon`
4. Create nodemon config file `nodemon.json`
5. Add dev script: `"dev": "nodemon"`

## Environment Variables

1. Install dotenv: `npm install dotenv`
2. Create `.env` file
3. Type all the env variables in the `` file
4. Load dotenv variables in a main file: `'config/'`

## Cors configuration

1. Install cors middleware `npm install cors`
2. Configure the cors middleware to authorize a limited set of origins
3. Add all authorized origins in .env files

## Logger

1. Install winston logger `npm install winston`
2. Create a logger configuration file under `config/`
3. Add a path for the logging directory en `.env` files
