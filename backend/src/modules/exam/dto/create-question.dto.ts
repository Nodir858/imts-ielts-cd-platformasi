import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsNotEmpty, IsString, ValidateNested } from "class-validator";

export class AddQuestionDto {
    @IsString()
    @IsNotEmpty()
    text!: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => OptionDto)  
    options!: OptionDto[]
}

class OptionDto {
    @IsString()
    @IsNotEmpty()
    text!: string;

    @IsBoolean()
    isCorrect!: boolean;
}