import { ApiProperty } from "@nestjs/swagger";

export class FilterProductDto {
    @ApiProperty({ type: String })
    public ids: string;

    @ApiProperty({ type: String })
    public name: string;

    @ApiProperty({ type: String })
    public category: string;
}