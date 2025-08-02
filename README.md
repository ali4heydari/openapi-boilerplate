<div align="center">
  <center><h1>OpenAPI boilerplate</h1></center>
</div>

<div align="center">
![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)
![OpenAPI](https://img.shields.io/badge/-3.0.2-1A2C34?logo=openapiinitiative&logoColor=green&logoSize=auto)
![SemanticRelease](https://img.shields.io/badge/SemanticRelease-494949?logo=semanticrelease&logoColor=#494949&logoSize=auto)
![Nodemon](https://img.shields.io/badge/-3.x-1A2C34?logo=nodemon&logoColor=red&logoSize=auto)
![PNPM](https://img.shields.io/badge/-10.x-F9AD00?logo=pnpm&logoColor=white&logoSize=auto)
![CommitLint](https://img.shields.io/badge/-19.x-000000?logo=commitlint&logoSize=auto)
![ConventionalCommits](https://img.shields.io/badge/-19.x-FE5196?logo=conventionalcommits&logoColor=white&logoSize=auto)
![Swagger](https://img.shields.io/badge/-5.x-1A2C34?logo=swagger&logoColor=green&logoSize=auto)
![Node.js](https://img.shields.io/badge/-22.x-5FA04E?logo=nodedotjs&logoColor=white&logoSize=auto)
![Prettier](https://img.shields.io/badge/-3.x-1A2C34?logo=prettier&logoColor=white&logoSize=auto)
![ESLint](https://img.shields.io/badge/-9.x-3A33D1?logo=eslint&logoColor=white&logoSize=auto)
</div>


A comprehensive, production-ready framework for **OpenAPI Specification** (OAS) development and documentation.

This project transforms the monolithic Swagger Petstore example into a modular, maintainable structure with separate files for paths, schemas, and components. It provides a complete toolkit for building, validating, documenting, and deploying OpenAPI specifications with best practices built-in.

Whether you're starting a new API design or refactoring an existing one, this boilerplate offers a structured approach with integrated tooling for the entire API lifecycle - from design and validation to documentation and versioned releases.

## Features

* 📝 **Modular API Design**: Write OpenAPI definitions in separate files for better organization and maintainability.
* 🔀 **Multiple Bundle Formats**: Combine all files with [redocly-cli](https://github.com/Redocly/redocly-cli) into YAML and JSON formats.
* 🧪 **Comprehensive Validation**: Lint and validate your OpenAPI documents with multiple tools:
  * [Redocly](https://redocly.com/) for OpenAPI-specific validation
  * [ESLint](https://eslint.org/) for code quality checks
* 📚 **Multiple Documentation Options**:
  * Preview API documentation with [Redocly](https://redocly.com/)
  * Generate interactive documentation with [Swagger UI](https://swagger.io/tools/swagger-ui/)
* 📊 **Reporting Tools**: Generate detailed reports about your API specification using Redocly's statistics feature.
* 🔄 **Development Workflow**: Watch mode for automatic rebuilding and linting during development.
* 📦 **Postman Integration**: Generate Postman collections from your OpenAPI specification.
* 🐳 **Docker Support**: Containerize your API documentation for easy deployment.
* 🚀 **Semantic Versioning**: Integrated release management with [release-it](https://github.com/release-it/release-it).
* 🔧 **VS Code Integration**: Pre-configured tasks for common operations and problem reporting.
* 🧩 **Git Hooks**: Automated quality checks with Husky and lint-staged before commits.

## The Rationale

Documenting APIs with the OpenAPI specification often resulted in unwieldy,
multi-thousand line documents that were difficult to manage.

This led me to investigate methods for dividing OpenAPI documents.
Visit my [blog](https://ali4heydari.tech/blog/modular-openapi-first-code-generation) for a deeper dive into my findings.
From this exploration, I crafted a specialized template to streamline the definition,
testing, and release of compartmentalized OpenAPI projects.

A well-structured project offers significant benefits.
Segmenting an extensive OpenAPI specification into several
documents not only simplifies management but also makes the documentation process more satisfying.
Additionally, I've consistently received positive feedback that such an arrangement encourages other
developers to engage more actively and suggest modifications to the documentation.

## Getting Started

### Quick Start

If you want to get started quickly with this boilerplate, follow these steps:

```bash
# Clone the repository
git clone https://github.com/yourusername/openapi-boilerplate.git my-api
cd my-api

# Install dependencies
pnpm install

# Start development mode with live preview
pnpm dev:bundle & pnpm preview:swagger
```

This will start a development server with hot reloading and open the Swagger UI documentation in your browser.

### Project Structure

The project is organized as follows:

```
├── spec/                  # OpenAPI specification files
│   ├── components/        # Reusable components
│   │   ├── requestBodies/ # Request body definitions
│   │   └── schemas/       # Schema definitions
│   ├── openapi.yaml       # Main OpenAPI entry point
│   └── paths/             # API endpoints organized by resource
│       ├── pet/           # Pet-related endpoints
│       ├── store/         # Store-related endpoints
│       └── user/          # User-related endpoints
├── build/                 # Generated output files
├── scripts/               # Utility scripts
└── swagger/               # Swagger UI configuration
```

This modular structure allows you to organize your API specification into logical components, making it easier to maintain and collaborate on.

### Prerequisites

- Docker
  ```bash
  bash <(curl -sSL https://get.docker.com)
  ```
- NodeJS + pnpm

    - **Option 1**: Use ready to go `devcontainer` with all dependencies installed:

        - Open the project in VS Code
        -
        Install [VS Code devcontainer extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
        if you haven't already
        - Press `F1` and select `Dev Containers: Reopen in Container`
        - Wait for the container to build and start

    - **Option 2**: Install NodeJS and pnpm on your local machine:
      You can install NodeJS + `pnpm` via [NodeJS official website](https://nodejs.org/en/download/).
      You need to specify the version that you want to install from first dropdown, we recommend version `22.14.0`,
      after choosing you OS in the next dropdown you will need to choose the tool you want to install with, we recommend
      `nvm` or `fnm`. Finally on the last dropdown choose `pnpm`. It will give you a script file like this:

      ```bash
      # Download and install fnm:
      curl -o- https://fnm.vercel.app/install | bash
  
      # Download and install Node.js:
      fnm install 22.14.0
  
      # Verify the Node.js version:
      node -v # Should print "v22.14.0".
  
      # Download and install pnpm:
      corepack enable pnpm
  
      # Verify pnpm version:
      pnpm -v
      ```

      ## Installing dependencies

      Before running the project, you need activate package manager and install the dependencies.
      You can activate the package manager by running command blow on the root directory of the project:

      ```bash
      corepack enable
      ```

      That will read the package manager and its exact version from `packageManager` property of `package.json` file and
      install it on your machine if needed.
      after that you can install the dependencies by running the following command:

      ```bash
      pnpm install
      ```

## Scripts

The following scripts are available in the project and can be executed using `pnpm run <script>`:

| Script name               | Description                                                                                                                                               |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `build`                   | Runs both `bundle:openapi`, `build:postman` and `build:docs` commands.                                                                                    |
| `build:docs`              | Builds the API documentation using both **Redocly** and **Swagger UI**.                                                                                   |
| `build:postman`           | Builds the API documentation using **Postman**.                                                                                                           |
| `bundle:redocly:json`     | Bundles the OpenAPI specification from `index.yaml` into a JSON file using **Redocly**.                                                                   |
| `bundle:redocly:yaml`     | Bundles the OpenAPI specification from `index.yaml` into a YAML file using **Redocly**.                                                                   |
| `bundle:vacuum:yaml`      | Bundles the OpenAPI specification using **Vacuum**.                                                                                                       |
| `dev:bundle`              | Runs both `bundle:openapi` command in watch mode.                                                                                                         |
| `dev:bundle:redocly:json` | Runs `bundle:redocly:json` command in watch mode.                                                                                                         |
| `dev:bundle:redocly:yaml` | Runs `bundle:redocly:yaml` command in watch mode.                                                                                                         |
| `dev:bundle:vacuum:yaml`  | Runs `bundle:vacuum:yaml` command in watch mode.                                                                                                          |
| `dev:lint`                | Runs `lint` command in watch mode.                                                                                                                        |
| `dev:lint:redocly`        | Runs `lint:redocly` command in watch mode.                                                                                                                |
| `dev:lint:vacuum`         | Runs `lint:vacuum` command in watch mode.                                                                                                                 |
| `lint`                    | Runs **ESLint**, **Redocly** and **Vacuum** linters.                                                                                                      |
| `lint:redocly`            | Lints the OpenAPI specification using **Redocly**.                                                                                                        |
| `lint:eslint`             | Runs **ESLint** checks                                                                                                                                    |
| `lint:eslint:fix`         | Runs **ESLint** checks and fix issues.                                                                                                                    |
| `lint:vacuum`             | Lints the OpenAPI specification using **Vacuum**.                                                                                                         |
| `preview:redocly`         | Previews the API documentation using **Redocly**'s community edition.                                                                                     |
| `preview:swagger`         | Copies the **Swagger UI**'s `index.html` to the build directory and starts an HTTP server to have a preview of the API documentation with **Swagger UI**. |
| `report`                  | Generates various reports using **Redocly**, **Vacuum**, and **Spectral**.                                                                                |
| `report:redocly`          | Generates statistics using **Redocly**.                                                                                                                   |
| `report:spectral`         | Generates a **Spectral** report using **Vacuum**.                                                                                                         |
| `report:vacuum:html`      | Generates an `HTML` report using **Vacuum**.                                                                                                              |
| `report:vacuum:json`      | Generates a `JSON` report using **Vacuum**.                                                                                                               |
| `prepare`                 | Runs Husky to manage Git hooks. (It will automatically run after `pnpm install` to set up git hooks, You don't need to run it manually)                   |

## VS Code tasks

The project includes a set of VS Code tasks that can be used to run various commands.
These tasks are defined in the `.vscode/tasks.json` file and can be accessed through the VS Code command palette
(`Ctrl`+`Shift`+`P`) by searching for "`Tasks: Run Task`". The available tasks include:

| Task Name                 | Description                                                                                                                                               |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `build`                   | Runs both `bundle:openapi` and `build:docs` commands.                                                                                                     |
| `build-and-lint`          | Runs `lint` task and `build` task in parallel.                                                                                                            |
| `build:docs`              | Builds the API documentation using both **Redocly** and **Swagger UI**.                                                                                   |
| `build:postman`           | Builds the API documentation using **Postman**.                                                                                                           |
| `bundle:openapi`          | Bundles the OpenAPI specification using multiple tools (**Redocly** and **Vacuum**).                                                                      |
| `bundle:redocly:json`     | Bundles the OpenAPI specification from `index.yaml` into a JSON file using **Redocly**.                                                                   |
| `bundle:redocly:yaml`     | Bundles the OpenAPI specification from `index.yaml` into a YAML file using **Redocly**.                                                                   |
| `bundle:vacuum:yaml`      | Bundles the OpenAPI specification using **Vacuum**.                                                                                                       |
| `dev:bundle`              | Runs `bundle:openapi` command in watch mode.                                                                                                              |
| `dev:bundle:redocly:json` | Runs `bundle:redocly:json` command in watch mode.                                                                                                         |
| `dev:bundle:redocly:yaml` | Runs `bundle:redocly:yaml` command in watch mode.                                                                                                         |
| `dev:bundle:vacuum:yaml`  | Runs `bundle:vacuum:yaml` command in watch mode.                                                                                                          |
| `dev:lint`                | Runs `lint` command in watch mode.                                                                                                                        |
| `dev:lint:redocly`        | Runs `lint:redocly` command in watch mode.                                                                                                                |
| `dev:lint:vacuum`         | Runs `lint:vacuum` command in watch mode.                                                                                                                 |
| `lint`                    | Runs **ESLint**, **Redocly** and **Vacuum** linters.                                                                                                      |
| `lint:redocly`            | Lints the OpenAPI specification using **Redocly**.                                                                                                        |
| `lint:eslint`             | Runs **ESLint** checks                                                                                                                                    |
| `lint:redocly`            | Lints the OpenAPI specification using **Redocly**.                                                                                                        |
| `lint:vacuum`             | Lints the OpenAPI specification using **Vacuum**.                                                                                                         |
| `preview:redocly`         | Previews the API documentation using **Redocly**'s community edition.                                                                                     |
| `preview:swagger`         | Copies the **Swagger UI**'s `index.html` to the build directory and starts an HTTP server to have a preview of the API documentation with **Swagger UI**. |
| `report`                  | Generates various reports using **Redocly**, **Vacuum**, and **Spectral**.                                                                                |
| `report:redocly`          | Generates statistics using **Redocly**.                                                                                                                   |
| `report:spectral`         | Generates a **Spectral** report using **Vacuum**.                                                                                                         |
| `report:vacuum:html`      | Generates an `HTML` report using **Vacuum**.                                                                                                              |
| `report:vacuum:json`      | Generates a `JSON` report using **Vacuum**.                                                                                                               |

Most of them only runs the command with the same name, but some of them are a bit different.
Plus some of them like `lint`, `lint:redocly` and `lint:vacuum` are integrated with VS Code `Problems` section
and you can see the errors and warnings in the `Problems` section of VS Code after running them.
This feature is very useful for quickly identifying and fixing issues in the OpenAPI specification.

## Docker

### Build Docker image

To build Docker image simply run:

```bash
docker build \
 -t awsome-project/openapi:2.0.0 \
 -f Dockerfile \
 .
```

### Run Docker container

To run docker container simply run:

```bash
docker run \
 -p 8080:80 \
 awsome-project/openapi:2.0.0
```

This will start a container and map port `8080` on your host machine to port `80` on the container.
You can have Swagger UI on the `/swagger-docs` and Redocly on the `/redocly-docs` endpoints.
The Swagger UI is also available on `/` path. Plus you can access the multiple OpenAPI specification generated by
different tools:

- Redocly:
    - YAML: `/openapi.generated.yaml` (Default)
    - JSON: `/openapi.generated.json`
- Vacuum: `/openapi.generated.vacuum.yaml`

The Postman collection is also available from `/postman.generated.json`

## Releasing

To release a new version of the project, there are multiple scripts available:

- `release`: Releases a new version using **release-it**.
  This script doesn't specify the version type (patch, minor, major), so you need to specify it in the command line.
- `release:patch`: Releases a new patch version using **release-it**.
- `release:minor`: Releases a new minor version using **release-it**.
- `release:major`: Releases a new major version using **release-it**.

Each of these scripts will update the version section in the `package.json`, `src/index.yaml`, `redocly.config.yaml` and
`README.md` files,
create a new git tag. To push the tags to the remote repository, you need to add `--follow-tags` flag to the `git push`
command.

## Best Practices

When working with this OpenAPI boilerplate, consider the following best practices:

1. **Modular Design**: Keep your API specification modular by organizing endpoints, schemas, and components in separate files.

2. **Consistent Naming**: Use consistent naming conventions for files, paths, and schemas to make your API more intuitive.

3. **Regular Validation**: Run linting and validation regularly during development to catch issues early.

4. **Version Control**: Use semantic versioning for your API and document changes in a changelog.

5. **Documentation**: Add detailed descriptions, examples, and response codes to make your API more user-friendly.

6. **Testing**: Generate Postman collections and test your API endpoints thoroughly.

7. **CI/CD Integration**: Integrate the build and validation process into your CI/CD pipeline.

8. **Feedback Loop**: Share your API documentation with stakeholders early and often to get feedback.

## Troubleshooting

Here are solutions to some common issues you might encounter:

### Validation Errors

If you're seeing validation errors:

```bash
# Run the linter to see detailed errors
pnpm lint

# Fix ESLint issues automatically where possible
pnpm lint:eslint:fix
```

### Bundle Generation Issues

If you're having trouble generating the bundled OpenAPI file:

```bash
# Check for syntax errors in your YAML files
pnpm lint:redocly

# Try bundling with verbose output
redocly bundle spec/openapi.yaml --ext yaml -o ./build/openapi.generated.yaml --verbose
```

### Preview Not Working

If the preview isn't working correctly:

```bash
# Make sure the bundle is up to date
pnpm bundle:openapi

# Start the preview server with explicit port
pnpx http-server build -p 8080
```

## Extending the Boilerplate

This boilerplate is designed to be extended and customized for your specific API needs. Here are some ways you can extend it:

### Adding Custom Validation Rules

You can add custom validation rules to the Redocly configuration in `redocly.config.yaml`:

```yaml
rules:
  my-custom-rule:
    severity: error
    given: $.paths.*.*
    then:
      function: pattern
      functionOptions:
        match: ^[a-zA-Z0-9]+$
```

### Customizing Documentation UI

You can customize the Swagger UI or Redocly documentation by modifying the respective configuration files:

- For Swagger UI, edit `swagger/index.html`
- For Redocly, modify the `theme` section in `redocly.config.yaml`

## Contributing

Contributions are welcome! Here's how you can contribute to this project:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes using conventional commits (`git commit -m 'feat: add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please make sure your code follows the existing style and passes all tests.

## License

Copyright (c) 2024-present Ali Heydari ([@ali4heydari](https://ali4heydari.tech)). Licensed under
the [MIT License](LICENSE.md).

The PetStore example used is derived
from [OAI/OpenAPI-Specification](https://github.com/OAI/OpenAPI-Specification/blob/master/examples/v3.0/petstore.yaml),
Copyright The Linux Foundation, Licensed under
the [Apache License, Version 2.0](https://github.com/OAI/OpenAPI-Specification/blob/master/LICENSE).
