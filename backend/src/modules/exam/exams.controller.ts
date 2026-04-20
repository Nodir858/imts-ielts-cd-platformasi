import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { ExamsService } from "./exams.service";
import { CreateExamsDto } from "./dto/create-exams.dto";
import { Roles } from "../auth/decorator/roles.decorator";
import { Role } from "../user/users.entity";
import { UpdateExamsDto } from "./dto/update-exams.dto";

@Controller('exams')

export class ExamsController {
    constructor (private readonly examsService: ExamsService) {}

    @Post()
    @Roles(Role.ADMIN)
    async create(@Body() createExamsDto: CreateExamsDto){
        return this.examsService.create(createExamsDto)
    }

    @Get()
    @Roles(Role.ADMIN)
    async findAll(){
        return this.examsService.findAll()
    }

    @Get(':id')
    @Roles(Role.ADMIN)
    async findById(@Param('id') id : string){
        return this.examsService.findById(id)
    }

    @Patch(':id')
    @Roles(Role.ADMIN)
    async update(@Param('id') id: string, @Body() updateExamsDto: UpdateExamsDto){
        return this.examsService.updateExamsById(id, updateExamsDto)
    }

    @Delete(':id')
    @Roles(Role.ADMIN)
    async delete(@Param('id') id: string){
        return this.examsService.deleteExamById(id)
    }
}