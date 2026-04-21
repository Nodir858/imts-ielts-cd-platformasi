import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateExamsDto {
    @IsNotEmpty({
        message: "Title is required"
    })
    @IsString()
    title!: string

    @IsNotEmpty({
        message:"Duration is required"
    })
    @IsNumber({}, {message: 'Duration must be a number'})
    duration!: number

    @IsNotEmpty({
        message: 'category is required'
    })
    @IsString()
    category!: string
}