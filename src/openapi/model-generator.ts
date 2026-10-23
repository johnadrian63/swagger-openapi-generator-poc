import { execFileSync } from "node:child_process";

execFileSync('npx', [
    "openapi-generator-cli",
    "generate",
    "-i",
    "http://localhost:3000/api-json",
    "-g",
    "typescript-angular",
    "-o",
    "src/shared/api",
    "--global-property=models"
], {
    stdio: "inherit",
    shell: true
});
