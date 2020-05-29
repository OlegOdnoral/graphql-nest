import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson/entities/lesson.entity';
import { LessonModule } from './lesson/lesson.module';
import { StudentModule } from './student/student.module';
import { StudentEntity } from './student/entities/student.entity';


@Module({
  imports: [
TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/school',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [
        Lesson,
        StudentEntity
      ]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    LessonModule,
    StudentModule
  ],
  controllers: [],
  providers: [
  ],
})
export class AppModule {}
