import { ApiProperty } from "@nestjs/swagger";

export class FilterUserDto {
    @ApiProperty({ type: String})
    public ids: string;
    
    @ApiProperty({ type: String })
    public firstName: string;

    @ApiProperty({ type: String })
    public lastName: string;
}