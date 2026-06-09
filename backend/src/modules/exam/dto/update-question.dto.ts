import { IsArray, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
class OptionDto{
    @IsString()
    text!: string;

    isCorrect!: boolean;
}

export class UpdateQuestionDto {
    @IsOptional()
    @IsString()
    text?: string;

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true})
    @Type(() => OptionDto)
    options?: OptionDto[]
}