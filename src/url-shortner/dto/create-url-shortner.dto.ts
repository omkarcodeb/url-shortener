import { ApiProperty } from "@nestjs/swagger/dist";
import { IsNotEmpty, IsOptional, IsUrl } from "class-validator";

export class CreateUrlShortnerDto {
    @IsNotEmpty()
    @ApiProperty()
    @IsUrl()
    url: string

    @IsOptional()
    shortUrl: string

}
