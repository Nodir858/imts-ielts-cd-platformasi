import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Option, OptionSchema } from "./option.entity";

@Schema()
export class Question {
    @Prop({required: true})
    text!: string;

    @Prop({ type: [OptionSchema], default: []})
    options!: Option[]
}

export const QuestionSchema = SchemaFactory.createForClass(Question);