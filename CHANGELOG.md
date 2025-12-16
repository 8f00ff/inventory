# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2025-12-15

### Added

- CI workflow for automatically building and publishing Docker images to `ghcr.io`.
- A new `CI/CD` section to the `README.md` explaining the automated Docker image build process.

## [1.0.0] - 2025-12-15

### Added

- Initial project structure with a sample TypeScript API.
- Express.js server setup to handle API requests.
- Docker configuration (`Dockerfile` and `docker-compose.yml`) for containerization.
- Development environment setup using Nix (`devenv.nix`).
- Basic project documentation (`README.md`, `LICENSE.md`, `ATTRIBUTIONS.md`).
- CI workflow for automatically building and publishing Docker images to `ghcr.io`.

[1.0.1]: https://github.com/8f00ff/inventory/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/8f00ff/inventory/releases/tag/v1.0.0
