import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        type: String
    })
    public firstName: string;

    @ApiProperty({
        type: String
    })
    public lastName: string;

    @ApiProperty({
        type: String
    })
    public email: string;
}