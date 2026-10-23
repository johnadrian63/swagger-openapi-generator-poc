import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module.js';
import { createDocument } from "./swagger/document-generator.js";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  createDocument(app);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
