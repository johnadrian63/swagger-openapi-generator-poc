import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle("Swagger POC")
    .setDescription("Swagger API Documentation")
    .setVersion("1.0")
    .addTag("documentation")
    .build();


  const documentaryFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("api", app, documentaryFactory, {
    jsonDocumentUrl: 'api-json',
    swaggerOptions: {
      url: '/api-json',
    },
  });

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
