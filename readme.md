# Basic Typescript React Template

Mildly opinionated template for a basic Typescript React and Node project. Useful for bootstrapping
a new project.

## Given Example Application

`/` page lists text items from a database, created from the `/Admin` page.

## Opinions

Opinions taken:
- separate App and API
- Vite for React frontend
- Jest for testing
- Prisma for database migrations/client
- Sqlite database (for simplicity and generality)

Further stack opinions needed to scale:
- Zod for API schema validation
- Zustand for state management
- Styling framework
- Storybook for component library
- Docker for containerisation
- Kubernetes for container orchestration
- Github actions for CI/CD

## Quick start

### API

1. cd api
1. npm install
1. npx prisma migrate dev
1. npm run dev
1. (optional) npm run test

### App

1. cd app
1. npm install
1. npm run dev
1. (optional) npm run test
