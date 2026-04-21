import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateExamsDto {
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
        
        @IsString()
        options!: string

        @IsNotEmpty()
        @IsString()
        correctOption!: string  
}