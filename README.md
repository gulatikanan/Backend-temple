# TempleHub Backend

The backend API for the **TempleHub** platform, built with **Strapi**. This repository handles data management, API endpoints, and content administration for the TempleHub application.

## 🚀 Deployed Links

- **Admin Panel URL**: [INSERT_DEPLOYED_ADMIN_URL] (e.g., https://api.templehub.com/admin)
- **API Base URL**: [INSERT_DEPLOYED_API_URL] (e.g., https://api.templehub.com)
- **Documentation**: [INSERT_DOCS_URL]

> **Note**: Please update the links above with the actual production URLs.

## 🛠 Features

- **Content Management**: Effortless management of temple data, events, and volunteers.
- **REST API**: Auto-generated endpoints for consuming content.
- **Volunteer Management**: Dedicated implementation for volunteer sign-ups and tracking.
- **Database**: configured to support both SQLite (dev) and PostgreSQL (staging/prod).

## � Local Developement

### Prerequisites
- **Node.js**: Version 20.x or higher
- **NPM** or **Yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gulatikanan/Backend-temple.git
   cd Backend-temple
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup:**
   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
   *Update variables in `.env` as needed (e.g., database credentials).*

### Running the Project

Start the development server with auto-reload:

```bash
npm run develop
# or
yarn develop
```

The admin panel will be available at [http://localhost:1337/admin](http://localhost:1337/admin).

## 🏗 Build & Deploy

To build the admin panel for production:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

## 📚 Tech Stack

- **Framework**: [Strapi v5](https://strapi.io/)
- **Database**: PostgreSQL (Production) / SQLite (Development)
- **Language**: TypeScript / JavaScript
