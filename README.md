# Money Tracker

tbc

## Table of Contents

- [Technologies](#technologies)
- [Screenshots](#screenshots)
- [Prerequisites](#prerequisites)
- [Installation](#installation)

## Technologies

- HTML, JS
- Tailwind
- React.js
- Node.js
- Express.js
- MongoDB

## Screenshots

tbc

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- MongoDB or MongoDB Atlas account

## Installation

1. Clone the repository

```bash
git clone https://github.com/mister2121/money-tracker.git
```

2. Go to the project directory and install dependencies for both the api and client

```bash
cd api
npm install
```

```bash
cd client
npm install
```

3. Rename the `.env_example` file in both the `client` and `api` directories to `.env` and add your API keys.

- Client:

```bash
VITE_APP_API_URL="http://localhost:4000/api" - OR DIFFERENT
```

- API:

```bash
MONGO_URL=YOUR_MONGODB_API_KEY_HERE
```

4. Start the server

```bash
cd api
node index.js
```

5. Start the client

```bash
cd client
npm run dev
```
