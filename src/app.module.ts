import { Module } from '@nestjs/common';
import { ConditionalModule, ConfigModule } from "@nestjs/config";

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

@Module({
  imports: [
    ConfigModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
