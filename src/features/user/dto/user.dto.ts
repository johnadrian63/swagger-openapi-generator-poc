import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
    @ApiProperty({ type: String })
    public firstName: string;

    @ApiProperty({ type: String })
    public lastName: string;

    @ApiProperty({ type: String })
    public email: string;

    @ApiProperty({ type: Number })
    public age: number;
}