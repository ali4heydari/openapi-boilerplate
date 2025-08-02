import openapiToPostman from "openapi-to-postmanv2";
import fs from "node:fs";
import yaml from "yaml";
import path from "node:path";

const DEFAULT_OPENAPI_INPUT_PATH = path.join(
    ".",
    "build",
    "openapi.generated.yaml",
  ),
  DEFAULT_POSTMAN_OUTPUT_PATH = path.join(
    ".",
    "build",
    "postman.generated.json",
  ),
  OPENAPI_INPUT_PATH = process.argv[2] || DEFAULT_OPENAPI_INPUT_PATH,
  POSTMAN_OUTPUT_PATH = process.argv[3] || DEFAULT_POSTMAN_OUTPUT_PATH,
  ENVIRONMENT_VARIABLES = [
    {
      key: "bearerToken",
      value: "<jwt-value>",
      type: "string",
    },
  ],
  LOGIN_ENDPOINTS = ["user/login"],
  addLoginTestScripts = (item, urlPath) => {
    if (LOGIN_ENDPOINTS.includes(urlPath)) {
      item.event = item.event || [];
      item.event.push({
        listen: "test",
        script: {
          type: "text/javascript",
          exec: [
            'pm.test("Update jwt token", function () {',
            "    pm.response.to.have.status(200);",
            "    const jsonDto = pm.response.json();",
            '    pm.collectionVariables.set("bearerToken", jsonDto.payload.jwt);',
            "});",
          ],
        },
      });
    }
  },
  /**
   * Processes all items in the Postman collection recursively
   */
  processItems = (items) => {
    for (const item of items) {
      if (item.item) {
        processItems(item.item);
      } else if (item.request) {
        processRequestItem(item);
      }
    }
  },
  /**
   * Processes a request item to add login test scripts
   */
  processRequestItem = (item) => {
    if (item.request.url && item.request.url.path) {
      const path = item.request.url.path.join("/").toLowerCase();
      addLoginTestScripts(item, path);
    }
  },
  convertOpenApiToPostman = async (openapiContent) => {
    return new Promise((resolve, reject) => {
      openapiToPostman.convertV2(
        { type: "string", data: openapiContent },
        {
          strictRequestMatching: true,
          requestParametersResolution: "Schema",
          exampleParametersResolution: "Schema",
        },
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        },
      );
    });
  },
  main = async () => {
    try {
      const openapiContent = fs.readFileSync(OPENAPI_INPUT_PATH, "utf8"),
        openapiJson = yaml.parse(openapiContent),
        convertResult = await convertOpenApiToPostman(openapiContent);

      if (!convertResult.result) {
        throw new Error(
          `Failed to convert OpenAPI to Postman: ${convertResult.reason}`,
        );
      }

      const { data: collection } = convertResult.output[0];

      collection.variable = [...collection.variable, ...ENVIRONMENT_VARIABLES];

      // The convertor does not set the version in the info object, we set it manually
      collection.info = {
        ...collection.info,
        version: openapiJson.info.version,
      };

      processItems(collection.item);

      fs.writeFileSync(
        POSTMAN_OUTPUT_PATH,
        JSON.stringify(collection, null, 2),
      );

      console.log(
        `Successfully generated Postman collection at \`${POSTMAN_OUTPUT_PATH}\` based on \`${OPENAPI_INPUT_PATH}\` OpenAPI spec`,
      );
    } catch (error) {
      console.error("Error generating Postman collection:\n", error);
      process.exit(1);
    }
  };
main().catch(console.error);
