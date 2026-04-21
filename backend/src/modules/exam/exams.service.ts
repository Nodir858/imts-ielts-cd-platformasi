import { Body, Injectable, NotFoundException } from "@nestjs/common";
import { CreateExamsDto } from "./dto/create-exams.dto";
import { Exams } from "./entity/exams.entity";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { UpdateExamsDto } from "./dto/update-exams.dto";
import { AddQuestionDto } from "./dto/create-question.dto";

@Injectable()

export class ExamsService {
    
    constructor(
        @InjectModel(Exams.name) private readonly examsModel: Model<Exams>
    ){}

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

    }

    //get all exams

    async findAll(): Promise<Exams[]> {
        return await this.examsModel.find().exec();
    }

    //get exam by id
    async findById(id: string): Promise<Exams | null> {
        return await this.examsModel.findById(id)
    }

    //edit exam by id
    async updateExamsById(id: string, updateExamsDto: UpdateExamsDto): Promise<Exams | null> {
        try{
            const exam = await this.examsModel.findByIdAndUpdate(
                id,
                {$set: updateExamsDto}
            )
            if(!exam) throw new NotFoundException(`Exam with id not founded`)
                return exam;
        }catch(error){
            throw new Error(`error updating exams`)
        }
    }
    
    //delete exam by id

    async deleteExamById(id: string): Promise<any>{
        return this.examsModel.deleteOne({
            _id: id
        }).exec()
    }

    // add questions to exam

    async addQuestionToExam(id: string, addQuestionDto: AddQuestionDto): Promise<Exams> {

        const updateExam = await this.examsModel.findByIdAndUpdate(
            id,
            {
                $push: { questions: addQuestionDto}
            },
            {
                new: true,
                runValidators: true
            }
        );

        if(!updateExam){
            throw new NotFoundException('Exam not found')
        }

        return updateExam
    }
}