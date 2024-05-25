# AmoCRM Leads Management with Nest.js and Vue.js

This repository contains a project that integrates AmoCRM for managing leads using Nest.js for the backend and Vue.js for the frontend.

## Project Overview

This project aims to provide a seamless integration with AmoCRM to manage leads efficiently. It leverages Nest.js to handle the backend logic and Vue.js for the frontend interface, offering a robust and responsive user experience.

## Features

- **AmoCRM Integration**: Sync with AmoCRM to manage leads directly from the CRM system.
- **Authentication**: Simplified backend authentication with amoCRM.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/malewicz1337/amocrm-leads-nest-vue.git
    cd amocrm-leads-nest-vue
    ```

2. Install dependencies:
    ```bash
    # For backend
    cd amocrm-api
    npm install

    # For frontend
    cd ../amocrm-frontend
    npm install
    ```

## Configuration

### Backend

1. Create a `.env` file in the `amocrm-api` directory and add the necessary environment variables:
    ```env
    AMOCRM_CODE=your_persistent_amocrm_token
    ```

2. Run the backend server:
    ```bash
    npm run start
    ```

### Frontend

1. Run the frontend development server:
    ```bash
    npm run serve
    ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
