# Mutual Fund Broker Web Application with RapidAPI Integration

A web application to manage mutual funds and portfolios with seamless integration with RapidAPI.

## Features

- User authentication and authorization.
- Portfolio management for mutual funds.
- Integration with external APIs using RapidAPI.
- Responsive design for an optimal user experience.

---

## Table of Contents

- [Mutual Fund Broker Web Application with RapidAPI Integration](#mutual-fund-broker-web-application-with-rapidapi-integration)
  - [Features](#features)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
  - [Scripts](#scripts)
  - [Troubleshooting](#troubleshooting)

---

## Requirements

Before setting up the application, ensure you have the following installed:

- **Node.js** (v18.20.0 or later)
- **npm** (comes with Node.js)
- **PostgreSQL** (latest stable version)

---

## Installation

Follow these steps to set up the application locally:

1. Clone the repository:

    ```bash
    git clone https://github.com/dev-amit-kumar/BHive-Machine-Coding-Roundmutual-fund-broker.git
    cd mutual-fund-broker
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

---

## Configuration

The application uses an environment file (`.env`) for configuration. Follow these steps to configure the environment:

1. Create a `.env` file in the root directory:

    ```bash
    touch .env
    ```

2. Add the following environment variables to the `.env` file:

    ```dotenv
    # Application configuration
    PORT=3000
    NODE_ENV="local"

    # Database configuration
    DB_USER="bhive"
    DB_HOST="localhost"
    DB_NAME="bhive_backend"
    DB_PASSWORD="bhive"
    DB_PORT="5432"

    # RapidAPI configuration
    JWT_SECRET="dummy_secret"
    RAPIDAPI_KEY="your-rapidapi-key"
    ```

    Replace placeholders like `your-database-user` and `your-rapidapi-key` with your actual values.

3. Save the `.env` file.

---

## Running the Application

1. Start the database server:

   Ensure your PostgreSQL service is running.

2. Run database migrations:

    ```bash
    npm run db:migrate
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

    The application should now be running on `http://localhost:3000`.

---

## Scripts

Here are the available npm scripts for the application:

| Command                   | Description                                |
| ------------------------- | ------------------------------------------ |
| `npm start`               | Start the application in production mode.  |
| `npm run dev`             | Start the application in development mode. |
| `npm run db:migrate`      | Run database migrations.                   |
| `npm run db:make-migrate` | Create a new migration file.               |
| `npm run format`          | Format code using Prettier.                |

---

## Troubleshooting

1. **Error: Cannot find `.env` file**  
    Ensure the `.env` file exists in the root directory and contains valid values.

2. **Database Connection Error**  
    Verify the database credentials in the `.env` file and ensure the database server is running.

3. **RapidAPI Key Issues**  
    Confirm your RapidAPI key is valid and matches the required API host in the `.env` file.

---
