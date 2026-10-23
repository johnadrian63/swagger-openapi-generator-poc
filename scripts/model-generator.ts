import { execFileSync } from "node:child_process";

const SWAGGER_JSON_URL = process.env.SWAGGER_JSON_URL;
const MODEL_PATH = "src/shared/api";

execFileSync('npx', [
    "openapi-generator-cli",
    "generate",
    "-i",
    `${SWAGGER_JSON_URL}`,
    "-g",
    "typescript-angular",
    "-o",
    MODEL_PATH,
    "--global-property=models"
], {
    stdio: "inherit",
    shell: true
});