# engraving4all

## Overview

Needs implementation

### Tech Stack

- **Frontend:** React (TypeScript), Material UI
- **Backend:** Node.js, Express, PostgreSQL, OpenAPI
- **Database:** PostgreSQL
- **API Integrations:** OpenAI, Zakeke API, Shopify
- **Hosting:** GoDaddy (for eventual production deployment)

## Repository Structure

[Frontend](./frontend/README.md): React (TypeScript) with Material UI for the user interface.

[Backend](./backend/README.md): Node.js, Express, PostgreSQL with API integrations (using OpenAPI specifications).

## Installation and Setup

### Initial Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/username/engraving4all.git
    cd engraving4all
    ```

2. **Install dependencies for both frontend and backend:**

    Navigate to the respective directories and install the dependencies using `yarn`:

    ```bash
    yarn install
    ```

3. **Environment Variables:**

Create an `.env` file in the root directory.
Include the following tokens:

```env
SHOPIFY_TOKEN=<token>
ZAKEKE_TOKEN=<token>
OPENAI_TOKEN=<token>
```

## Running the Project

To run the project in development mode:

```bash
yarn start
```
