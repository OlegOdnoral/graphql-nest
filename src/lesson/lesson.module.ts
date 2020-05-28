import { Module } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { LessonResolver } from './lesson.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Lesson]),
  ],
  providers: [
    LessonService,
    LessonResolver
  ]
})
export class LessonModule {}
