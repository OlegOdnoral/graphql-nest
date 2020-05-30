import { Module } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { LessonResolver } from './lesson.resolver';
import { StudentModule } from 'src/student/student.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Lesson]),
    StudentModule
  ],
  providers: [
    LessonService,
    LessonResolver
  ]
})
export class LessonModule {}
