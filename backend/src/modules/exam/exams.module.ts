import { Module } from "@nestjs/common";
import { Exams, ExamsSchema } from "./entity/exams.entity";
import { ExamsController } from "./exams.controller";
import { ExamsService } from "./exams.service";
import { MongooseModule } from "@nestjs/mongoose";
@Module({
    imports: [
        MongooseModule.forFeature([
                    {name: Exams.name, schema: ExamsSchema}
                ])
    ],
    controllers: [ExamsController],
    providers: [ExamsService],
    exports: [ExamsService]
})

export class ExamsModule {}