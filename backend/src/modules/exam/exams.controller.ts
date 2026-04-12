import { Controller, Post, Body } from "@nestjs/common";
import { ExamsService } from "./exams.service";
import { CreateExamsDto } from "./dto/create-exams.dto";
import { Roles } from "../auth/decorator/roles.decorator";
import { Role } from "../user/users.entity";

@Controller('exams')

export class ExamsController {
    constructor (private readonly examsService: ExamsService) {}

    @Post()
    @Roles(Role.ADMIN)
    async create(@Body() createExamsDto: CreateExamsDto){
        return this.examsService.create(createExamsDto)
    }
}