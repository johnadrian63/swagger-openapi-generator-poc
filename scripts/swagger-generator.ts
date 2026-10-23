import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function createDocument(app: INestApplication) {
    const config = new DocumentBuilder()
        .setTitle("Swagger POC")
        .setDescription("Swagger API Documentation")
        .setVersion("1.0")
        .addTag("documentation")
        .build();

    const documentaryFactory = () => SwaggerModule.createDocument(app, config);

    SwaggerModule.setup("api", app, documentaryFactory, {
        jsonDocumentUrl: '/api-json',
        useGlobalPrefix: false,
    });
}