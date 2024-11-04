# Basic Typescript React Template

Mildly opinionated template for a basic Typescript React project.

## Given Example Application

Root page lists items from a database, and allows item upvoting. Items are ordered by 60 seconds of upvotes, then descending created data. Items are added from the /Admin page.

## Opinions

Opinions taken:
- separate App and API
- Vite for React frontend
- Jest for testing
- Prisma for database migrations/client
- Sqlite database

Further opinions needed to scale:
- Zod for API schema validation
- Zustand for state management

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
