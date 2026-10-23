import { execFileSync } from "node:child_process";

execFileSync('npx', [
    "openapi-generator-cli",
    "generate",
    "-i",
    `${process.env.SWAGGER_JSON_URL}`,
    "-g",
    "typescript-angular",
    "-o",
    "src/shared/api",
    "--global-property=models"
], {
    stdio: "inherit",
    shell: true
});