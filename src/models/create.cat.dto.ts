import { ApiProperty } from "@nestjs/swagger";

export class CreateCatDto {
    @ApiProperty({
        description: "First name of the user"
    }) firstName: string;
    @ApiProperty({
        description: "Last name of the user"
    }) lastName: string;
    @ApiProperty({
        description: "Age of the user"
    }) age: number;
}