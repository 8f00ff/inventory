[![inventory](https://img.shields.io/badge/inventory-blue)](https://github.com/8f00ff/inventory)
[![8f00ff](https://img.shields.io/badge/8f00ff-8f00ff)](https://github.com/8f00ff)

[<img src="https://raw.githubusercontent.com/ZoeBijl/QueerCats/refs/heads/main/MorningCoffee/SVG/QueerCatMorningCoffee_Progress.svg" width="48" height="48" alt="Morning Pride Cat"/>](https://github.com/ZoeBijl/QueerCats)

# Inventory API Demo

This project is a simple TypeScript API endpoint that handles player inventory updates with proper error handling. It's built with Express.js and serves as a demonstration of a basic API setup.

## Features

*   **TypeScript:** The project is written in TypeScript, providing type safety and better code organization.
*   **Express.js API:** A simple API endpoint is set up using Express.js to handle inventory updates.
*   **Docker Support:** A `Dockerfile` is included for building and running the project in a containerized environment.
*   **Development Environment:** The project includes a `devenv.nix` file for a reproducible development environment using Nix.

## Project Notes & Simplifications

This project is designed as a simple demonstration. The primary goal is to showcase a basic TypeScript API with error handling, not to build a production-ready application. The following simplifications were made to keep the scope focused:

*   **In-Memory Storage:** The player inventory is stored in memory. For a real-world application, a persistent data store like **Redis** or a database (e.g., PostgreSQL, MongoDB) would be used.
*   **No Authentication/Authorization:** The API endpoints are not protected. In a production environment, **JWT-based authentication** or another auth mechanism would be implemented to secure Create, Update, and Delete operations.
*   **Monolithic Structure:** All the application logic resides in a single file for simplicity. A larger application would be broken down into a more modular structure (e.g., controllers, services, data access layers).
*   **Minimalist Setup:** Features like code linting, automated testing, and extensive API documentation (e.g., Swagger/OpenAPI) have been omitted for clarity and to focus on the core API logic.
*   **No Player Management:** The demo focuses solely on inventory updates and does not include endpoints for player creation or management.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/8f00ff/inventory.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```

### Running the Application

You can run the aplication in development mode using:

```sh
npm start
```

## Docker

This project includes a `Dockerfile` that can be used to build and run the application in a Docker container.

Build the Docker image:

```sh
docker build -t inventory .
```

Run the Docker container:

```sh
docker run -p 3000:3000 inventory
```

### Docker Compose

A `docker-compose.yml` file is also provided for development and as an example of how to run the service.

To start the service with Docker Compose, run:

```sh
docker compose up -d --build
```

## CI/CD

[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/8f00ff/inventory/docker.yml?label=docker)](https://github.com/8f00ff/inventory/actions/workflows/docker.yml)

This project uses GitHub Actions to automatically build and publish a Docker image to the GitHub Container Registry (`ghcr.io`) on every push to the `main` branch.

You can run the latest image directly from the container registry:
```sh
docker run -p 3000:3000 ghcr.io/8f00ff/inventory:latest
```

## Changelog

[![GitHub Tag](https://img.shields.io/github/v/tag/8f00ff/inventory)](https://github.com/8f00ff/inventory/tags)

See the [CHANGELOG.md](CHANGELOG.md) file for a detailed list of changes.

## License

[![GitHub License](https://img.shields.io/github/license/8f00ff/inventory)](LICENSE.md)

This project is licensed under [GNU Lesser General Public License (LGPL-3.0)](https://www.gnu.org/licenses/lgpl-3.0.en.html) - see the [LICENSE.md](LICENSE.md) file for details.

## Attributions

For attribution information including third-party assets and tools used in this project, see [ATTRIBUTIONS.md](ATTRIBUTIONS.md).
