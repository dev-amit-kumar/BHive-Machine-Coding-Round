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
  - [Steps to Follow for Desired Functionality](#steps-to-follow-for-desired-functionality)
    - [1. **Check Application Availability**](#1-check-application-availability)
    - [2. **User Registration**](#2-user-registration)
    - [3. **User Login**](#3-user-login)
    - [4. **Authorization Token**](#4-authorization-token)
    - [5. **Fetch All Mutual Fund Families**](#5-fetch-all-mutual-fund-families)
    - [6. **Fetch Mutual Funds by AMC Code**](#6-fetch-mutual-funds-by-amc-code)
    - [7. **Add a Portfolio**](#7-add-a-portfolio)
    - [8. **Get Portfolio**](#8-get-portfolio)

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

    Update the Database configuration env variables as per your configuration.
    
    Replace the `your-rapidapi-key` with your actual values.

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

## Steps to Follow for Desired Functionality

### 1. **Check Application Availability**
   - **API Endpoint**: `GET localhost:3000/health`
   - **Expected Response**:
     ```json
     {
         "msg": "Health check is ok"
     }
     ```

---

### 2. **User Registration**
   - **API Endpoint**: `POST localhost:3000/auth/register`
   - **Use Case**: Register a new user.
   - **Scenarios**:
     - **Creating a New User**
       ```json
       {
           "id": 2,
           "message": "user registered"
       }
       ```
     - **Existing User**
       ```json
       {
           "error": "User already exists"
       }
       ```

---

### 3. **User Login**
   - **API Endpoint**: `POST localhost:3000/auth/login`
   - **Use Case**: Authenticate a user and receive a token.
   - **Scenarios**:
     - **Correct Credentials**
       ```json
       {
           "token": "<JWT_TOKEN>"
       }
       ```
     - **Invalid Credentials**
       ```json
       {
           "error": "Invalid credentials"
       }
       ```

---

### 4. **Authorization Token**
   - **Purpose**: Authenticate subsequent API requests using the token.
   - **Steps**:
     - Include the token as a Bearer token in the `Authorization` header.
   - **Error Response** (if token is missing or invalid):
     ```json
     {
         "error": "Invalid token"
     }
     ```

---

### 5. **Fetch All Mutual Fund Families**
   - **API Endpoint**: `GET localhost:3000/mutual-fund/family`
   - **Expected Response**:
     ```json
     {
         "familyList": [
             "BirlaSunLifeMutualFund_MF",
             "HDFCMutualFund_MF",
             "ICICIPrudentialMutualFund_MF",
             "...more families"
         ]
     }
     ```

---

### 6. **Fetch Mutual Funds by AMC Code**
   - **API Endpoint**: `GET localhost:3000/mutual-fund?AMC_Code=<AMC_Code>`
   - **Example**:
     - **Query**: `AMC_Code=BirlaSunLifeMutualFund_MF`
   - **Expected Response**:
     ```json
     [
         {
            "Unique_No": 71,
            "AMC_Active_Flag": "1",
            "AMC_Code": "BirlaSunLifeMutualFund_MF",
            "AMC_IND": null,
            "AMC_Scheme_Code": "02",
            "Additional_Purchase_Amount": 500,
            "Channel_Partner_Code": "B02",
            "Dividend_Reinvestment_Flag": false,
            "End_Date": "2049-12-31T00:00:00.000Z",
            "Exit_Load": 0,
            "Exit_Load_Flag": false,
            "Face_Value": 10,
            "ISIN": "INF209K01090",
            "Lock-in_Period": 0,
            "Lock-in_Period_Flag": false,
            "Maximum_Purchase_Amount": 0,
            "Maximum_Redemption_Qty": 0,
            "Minimum_Purchase_Amount": 500,
            "Minimum_Redemption_Qty": 0.001,
            "Purchase_Allowed": true,
            "Purchase_Amount_Multiplier": 1,
            "Purchase_Cutoff_Time": "14:30:00",
            "Purchase_Transaction_Mode": "DP",
            "RTA_Agent_Code": "CAMS",
            "RTA_Scheme_Code": "02",
            "ReOpening_Date": null,
            "Redemption_Allowed": true,
            "Redemption_Amount_Maximum": 0,
            "Redemption_Amount_Minimum": 0.01,
            "Redemption_Amount_Multiple": 0.01,
            "Redemption_Cutoff_Time": "15:00:00",
            "Redemption_Qty_Multiplier": 0.001,
            "Redemption_Transaction_Mode": "DP",
            "SIP_Flag": true,
            "STP_Flag": false,
            "SWP_Flag": true,
            "Scheme_Code": "02-DP",
            "Scheme_Name": "ADITYA BIRLA SUN LIFE ELSS TAX SAVER FUND - REGULAR PLAN -IDCW PAYOUT",
            "Scheme_Plan": "NORMAL",
            "Scheme_Type": "ELSS",
            "Settlement_Type": "T2",
            "Start_Date": "2010-07-19T00:00:00.000Z",
            "Switch_Flag": true
         },
         "...more funds"
     ]
     ```

---

### 7. **Add a Portfolio**
   - **API Endpoint**: `POST localhost:3000/portfolio/add`
   - **Use Case**: Add a mutual fund to the portfolio.
   - **Expected Response**:
     ```json
     {
         "message": "Successfully added portfolio"
     }
     ```

---

### 8. **Get Portfolio**
   - **API Endpoint**: `GET localhost:3000/portfolio`
   - **Expected Response**:
     ```json
     {
         "portfolio": [
             {
                 "id": 3,
                 "userId": "2",
                 "mutualFundId": "71",
                 "amount": 4,
                 "created_at": "2024-12-21T17:41:36.034Z"
             },
             "...more portfolios"
         ]
     }
     ```

--- 
