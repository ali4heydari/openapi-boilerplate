# OpenAPI boilerplate

An initial framework for **OpenAPI Specification** (OAS) initiatives.

The project deconstructs the Swagger Petstore sample from the primary documentation into more manageable components.
Additionally, it incorporates useful terminal commands for build, link, mock, and preview the OpenAPI file.

This framework serves as a reference for structuring your project, whether you're starting a fresh OpenAPI document or refining an existing one.

## Features

* 📝 Write OpenAPI definitions in different files.
* 🔀 Combine all files with [redocly-cli](https://github.com/Redocly/redocly-cli).
* 🧪 Validate and lint the OpenAPI document with [stoplightio/spectral](https://github.com/stoplightio/spectral).
* 📚 Preview the API reference documentation with [swagger-api/swagger-ui](https://swagger.io/tools/swagger-ui/).
* 🚀 Run a mock server based on the OpenAPI document with [Mockoon](https://mockoon.com/).
* 🌐 Local proxy to bypass CORS issues 

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

## Getting started

### Requirements

* Node.js 20

### Installation

1. Clone the repository.

    ```
    git clone https://github.com/ali4heydari/openapi-boilerplate.git
    ```

2. Install the dependencies.

    ```
    pnpm install
    ```

3. Edit `openapi.yaml` to fit your API definition. 
If you’re not familiar with the OpenAPI Specification, read [Getting started with OAS](https://swagger.io/solutions/getting-started-with-oas/) first.

## Available commands

The project will build, lint, mock, and preview the OpenAPI document from the terminal,
with the following commands:

### Build

The command bundles the spec as one `.yaml` file.

```
pnpm run build:spec
```

The minified document is stored in `openapi.generated.yaml`.

### Lint

The command checks if the document follows the OpenAPI 3.0 Specification.

```
pnpm run lint
```

### Preview

The command builds a docs site so that you can view the rendering on your local browser.

```
pnpm run preview
```
This command uses redocly-cli to build the docs site. The server starts on http://127.0.0.1:8080.

```
pnpm run preview:swagger

```
This command uses swagger-ui to build the docs site.

### Mock
The command starts a mock server based on the OpenAPI document via Mockoon.

```
pnpm run mock-api
```

### Proxy
The command starts a local proxy server to bypass CORS issues for both dev and prod environments.

```bash
pnpm run proxy:dev
```

```
pnpm run proxy:prod
```


## License

Copyright (c) 2024-present Ali Heydari ([@ali4heydari](https://ali4heydari.tech)). Licensed under the [MIT License](LICENSE.md).

The PetStore example used is derived from [OAI/OpenAPI-Specification](https://github.com/OAI/OpenAPI-Specification/blob/master/examples/v3.0/petstore.yaml), Copyright The Linux Foundation, Licensed under the [Apache License, Version 2.0](https://github.com/OAI/OpenAPI-Specification/blob/master/LICENSE).
