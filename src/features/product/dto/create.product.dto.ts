import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty({
        type: String
    })
    public name: string;

    @ApiProperty({
        type: String
    })
    public brand: string;

    @ApiProperty({
        type: String
    })
    public model: string;
}