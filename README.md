# BOOKS CLIENT

NextJS Client for Book Management

[Go to Backend repo](https://github.com/ht1204/backend-api)

## Instructions
- Install NodeJS
- Clone this repo through command `git clone https://github.com/ht1204/frontend-client.git`
- Install dependencies: `npm i` or `npm install`
- Create file for environment variables named `.env`
- In `.env` create a variable for backend-api endpoint named `NEXT_PUBLIC_BACKEND_URL` .
- Check in advanced that Laravel backend server is running with a http client, i.e. Postman
- Finally, you can run the server with following modes:
- Run in dev mode: `npm run dev`
- Run in production mode: `npm run start`
- Check CRUD Book Management: [Go to Page](http://localhost:3000/)

## Unit Testing
- Server must be running up in advanced.
- Run tests e2e in cypress:  `npx cypress open`.
- Choose option: `E2E Testing`.
- Choose a web browser for testing.
- Search the test named `books.cy.js`.
- Check E2E Testing for Book Management.

Mentorship by [https://aprendible.com/](https://aprendible.com/)
