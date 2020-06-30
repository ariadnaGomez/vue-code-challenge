# Vue Code Chanllenge

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Test](#test)
4. [Mocks](#mocks)
5. [Static Code Analysis](#validation)

## Installation

Install the dependencies.

```bash
# Install repo dependencies
npm install
```

## Usage

```bash
# Launch app
npm run serve
```

## Test 🧪

### Unit Testing 🧪

Unit tests are executed in pre-push hook.

```bash
# Run tests
npm run test:unit

```

Vue testing library has been used to avoid testing implementation details. More info about this library can be found in: [Vue Testing Library](https://testing-library.com/docs/vue-testing-library/intro)

### E2E Testing 🧪

#### Cypress 🌲

In order e2e tests to pass, server api should be running.

```bash
npm run test:e2e
```

Cypress testing library has also been used. [Cypress testing library](https://testing-library.com/docs/cypress-testing-library/intro)

## Mocks

To avoid mocking server requests in unit tests MSW library has been installed. It intercepts http requests. More info in [MSW](https://mswjs.io/)

## Static Code Analysis

Code is verified and formatted in precommit and prepush hooks. It uses eslint, prettier and stylelint.
Autofixable rules are applied and added to commits with lint-staged.

Commits are also formatted following the Conventional Commits specification.
