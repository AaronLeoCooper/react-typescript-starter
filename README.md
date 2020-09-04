# React TypeScript Starter

This project can be used as a slightly opinionated starting point for a new React JS app.
It includes primarily:

- React
- TypeScript
- Styled Components
- React Router
- Redux (+ redux-toolkit for less boilerplate)
- Code quality tools and scripts (ESLint, Prettier)
- Pre-commit code quality checks

**Yarn** is the preferred package manager for this project setup, please use that.

## Setup

Simply run `yarn install` to install dependencies.

Optionally, add a `.env` file to manage sensitive values to be made available via
`process.env.VAR_NAME` in the app.

## Scripts

### Running & building the app

- `yarn start` - Runs the app locally in development mode: 
- `yarn build` - Builds the app into static files for production, emitting the files inside the
  `build` directory

### Tests & code quality tools

- `yarn test` - Runs all unit tests with coverage; coverage data will be emitted inside the
  `coverage` directory
- `yarn lint` - Run ESLint and fix any auto-fixable linter issues
- `yarn prettier` - Run Prettier and reformat any files that can be cleaned up
- `yarn tsc` - Run the TypeScript compiler to check for static code errors. This does not
  modify or emit any files

This project was originally bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).
