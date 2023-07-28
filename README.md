<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

# Brimvoid Coding Challenge | NestJS + TypeORM + MariaDB

Welcome to our Coding Challenge! This challenge focuses on building a time tracking backend server using NestJS, TypeORM, and MariaDB. The goal is to create a REST API that allows you to track work logs for tasks, including the duration in seconds and a userID. You will need to ensure the necessary relations exist between the entities.

## Technologies

This backend server is built using the following technologies:

- **NestJS:** A progressive Node.js framework for building efficient and scalable server-side applications.
- **TypeORM:** An Object-Relational Mapping (ORM) library that simplifies database integration and management.
- **MariaDB:** A popular open-source relational database management system.

## Challenge Requirements
Your task is to create a RESTful API conforming to REST architectural principles. The API should allow clients to perform the following action:

- Add a work log to a task, providing the duration in seconds and a userID.

Please note that there is no specific requirement to create an endpoint for task creation. Instead, you can modify the task in the database directly. Your primary focus should be on implementing the endpoint for adding work logs to a task.

Ensure that the API endpoint for work logging follows standard naming conventions and adheres to RESTful principles, promoting a clear and intuitive interface.

## Setup and Development

To set up and run the backend server locally, follow these steps:

1. Clone the repository: `git clone [repository-url]`
2. Install dependencies: `npm install`
3. Start the database using Docker: `docker compose up -d`
4. Start the server: `npm run start:dev`

The server should now be running locally on `http://localhost:3000`.

## Submission

To submit your solution, please follow the instructions below:

1. Create a new branch in the Git repository.
2. Commit and push all the code necessary to run the server locally to your branch.
3. Once you have pushed your branch, please notify us via email.
4. We will review your submission and provide feedback as soon as possible.

Please ensure that your submission includes all the required code and instructions to run the server locally.

## Time Limit

This challenge should take a maximum of 90 minutes to complete, regardless of whether you are able to finish all the
tasks or not. We understand that time constraints can be a factor, and we want to ensure a fair evaluation.

## Evaluation Criteria

We will assess your submission based on the following criteria:

- Adherence to the challenge requirements
- Proper usage of NestJS, TypeORM, and MariaDB
- REST API design and implementation
- Overall functionality and correctness

Please keep these criteria in mind while working on the challenge.

## Note on Testing

While it is not required for this challenge, writing unit tests and ensuring code coverage is always encouraged to ensure the quality and robustness of your solution.

## Good luck!

We hope you find this coding challenge both engaging and informative. We look forward to reviewing your submission and evaluating your skills as a backend developer. If you have any questions or need clarification during the challenge, please don't hesitate to reach out to us.

Best regards,

Brimvoid 🚀