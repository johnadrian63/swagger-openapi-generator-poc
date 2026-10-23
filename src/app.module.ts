import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { RouterModule } from "@nestjs/core";
import { appRoutes } from "./app.routes.js";
import { UserModule } from "./features/user/user.module.js";
import { ProductModule } from "./features/product/product.module.js";

@Module({
  imports: [
    ConfigModule.forRoot(),
    RouterModule.register([
      {
        path: "api",
        children: [
          ...appRoutes
        ]
      }
    ]),
    UserModule,
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
