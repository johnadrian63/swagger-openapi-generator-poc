import { Body, Controller, Get, Post } from "@nestjs/common";

import { CreateUserDto } from "./dto/create.user.dto.js";
import { FilterUserDto } from "./dto/filter.user.dto.js";

@Controller()
export class UserController {
    @Get()
    public getList(@Body() filter: FilterUserDto): string {
        return "";
    }

    @Post()
    public createUser(@Body() input: CreateUserDto): string {
        return "";
    }
}