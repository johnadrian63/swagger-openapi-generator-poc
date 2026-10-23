import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";

import { ProductDto } from "./dto/product.dto.js";
import { CreateProductDto } from "./dto/create.product.dto.js";
import { FilterProductDto } from "./dto/filter.product.dto.js";

@Controller()
export class ProductController {
    @Get()
    @ApiOkResponse({ type: [ProductDto] })
    public getList(@Body() filter: FilterProductDto): ProductDto[] {
        return [
            {
                name: "Samsung Smartphone",
                brand: "Samsung",
                model: "A52g"
            }
        ];
    }

    @Post()
    @ApiOkResponse({ type: ProductDto })
    public createUser(@Body() input: CreateProductDto): ProductDto {
        return {
            name: "Samsung Smartphone",
            brand: "Samsung",
            model: "A52g"
        };
    }
}