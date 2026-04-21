import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()

export class Option{
    @Prop({required: true})
    text!: string;

    @Prop({default: false})
    isCorrect!: boolean;
}

export const OptionSchema = SchemaFactory.createForClass(Option)