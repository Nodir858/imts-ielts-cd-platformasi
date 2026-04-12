import { Injectable } from "@nestjs/common";
import { CreateExamsDto } from "./dto/create-exams.dto";
import { Exams } from "./entity/exams.entity";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()

export class ExamsService {
    
    constructor(@InjectModel(Exams.name) private readonly examsModel: Model<Exams>){}

    //add exam 
    async create(createExamsDto: CreateExamsDto): Promise<Exams> {
        try{
           
            const {title} = createExamsDto;
            const examExists = await this.examsModel.findOne({title});
            if(examExists){
                throw new Error(`Exam already exists`)
            }
            const newExam = new this.examsModel(createExamsDto)
            return await newExam.save();
        }catch(error){
            throw new Error(`error creating exams ${error}`)
        }

    }e

}