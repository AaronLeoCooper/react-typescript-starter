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

This project builds on top of the standard [create-react-app][CRA] setup, but removes unneeded
clutter and provides a logical starting point to start using all the above libraries effectively
in minimal time. For example, the core App component already wraps the app in a react-redux
`<Provider>` and react-router `<Router>` component.

## Setup

> **Yarn** is the preferred package manager for this project setup, please at least v1.22 or higher

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

## Pre-commit checks

Husky is installed in this project, which runs several commands when you `git commit` your
changes. By default, all code quality scripts mentioned above are ran on each commit.
These scripts can be adjusted inside the `"husky": {}` fields inside `package.json`.

[CRA]: https://github.com/facebook/create-react-app
