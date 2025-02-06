import { IsNotEmpty, IsString } from "class-validator";

export class createCompanyDto {

    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly address: string;

    @IsString()
    @IsNotEmpty()
    readonly email: string;
}