import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service.js';
import { CreateCatDto } from "./models/create.cat.dto.js";
import { ApiQuery, ApiResponse } from "@nestjs/swagger";
import { DataValue } from "./models/data.value.enum.js";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  public create(@Body() createCatDto: CreateCatDto): string {
    return this.appService.getHello();
  }

  @Get()
  @ApiQuery({ name: "role", enum: DataValue, required: false })
  @ApiResponse({ type: String })
  public getData(): string {
    return "getData()";
  }
}
