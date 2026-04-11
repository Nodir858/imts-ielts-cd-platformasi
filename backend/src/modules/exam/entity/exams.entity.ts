import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Role } from "../../user/users.entity";
import mongoose from "mongoose";

@Schema({timestamps: true, collection: 'exams'})
export class Exams {
    @Prop({required: true, trim: true})
    title!: string

    @Prop({required: true})
    duration!:number

    @Prop({required: true})
    category!:string

    // @Prop({require: true, trim: true})
    // totalMarks!: number

    // @Prop({required: true, trim:true})
    // passingMarks!: number

    @Prop([{required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Questions'}])
    question!: mongoose.Types.ObjectId[];

}

export const ExamsSchema = SchemaFactory.createForClass(Exams);