import { Body, Controller, Get, Post } from "@nestjs/common";

import { CreateProductDto } from "./dto/create.product.dto.js";
import { FilterProductDto } from "./dto/filter.product.dto.js";

@Controller()
export class ProductController {
    @Get()
    public getList(@Body() filter: FilterProductDto): string {
        return "";
    }

    @Post()
    public createUser(@Body() input: CreateProductDto): string {
        return "";
    }
}