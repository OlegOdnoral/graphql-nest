import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './student.service';
import { StudentEntity } from './entities/student.entity';
import { StudentResolver } from './student.resolver';

@Module({
  imports: [
  TypeOrmModule.forFeature([StudentEntity]),
  ],
  providers: [
    StudentResolver,
    StudentService
  ]
})
export class StudentModule {}
