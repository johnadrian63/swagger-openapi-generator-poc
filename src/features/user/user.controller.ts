import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";

import { UserDto } from "./dto/user.dto.js";
import { CreateUserDto } from "./dto/create.user.dto.js";
import { FilterUserDto } from "./dto/filter.user.dto.js";

@Controller()
export class UserController {
    @Get()
    @ApiOkResponse({ type: [UserDto] })
    public getList(@Body() filter: FilterUserDto): UserDto[] {
        return [
            {
                firstName: "John",
                lastName: "Doe",
                email: "john.doe@awesome.com",
                age: 33
            }
        ];
    }

    @Post()
    @ApiOkResponse({ type: UserDto })
    public createUser(@Body() input: CreateUserDto): UserDto {
        return {
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@awesome.com",
            age: 33
        };
    }
}