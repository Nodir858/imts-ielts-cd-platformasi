import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Role } from "../../user/users.entity";
import mongoose from "mongoose";
import { Question, QuestionSchema } from "./question.entity";

@Schema({timestamps: true, collection: 'exams'})
export class Exams {
    @Prop({required: true, trim: true})
    title!: string

    @Prop({required: true})
    duration!:number

    @Prop({required: true})
    category!:string

    @Prop({type: [QuestionSchema], default: []})
    questions!: Question[]
}

export const ExamsSchema = SchemaFactory.createForClass(Exams);