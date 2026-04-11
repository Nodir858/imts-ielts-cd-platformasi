import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateExamsDto {
    @IsNotEmpty({
        message: "Title is required"
    })
    @IsString()
    title!: string

    @IsNumber({})
    @IsNotEmpty({
        message:"Description is required"
    })
    duration!: number

    @IsNotEmpty({
        message: 'category'
    })
    @IsString()
    category!: string

}