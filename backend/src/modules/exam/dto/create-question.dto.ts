import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class AddQuestionDto {
    @IsString()
    @IsNotEmpty()
    text!: string;

    @IsArray()
    options!: OptionDto[]
}

class OptionDto {
    @IsString()
    @IsNotEmpty()
    text!: string;

    isCorrect!: boolean;
}