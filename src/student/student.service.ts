import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentEntity } from './entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { v4 as uuid } from 'uuid';


@Injectable()
export class StudentService {

    constructor(
        @InjectRepository(StudentEntity)
        private studentRepository: Repository<StudentEntity>
    ) {}

    createStudent(createStudentDto: CreateStudentDto): Promise<StudentEntity> {
        const { firstName, lastName } = createStudentDto;
        const newStudent = this.studentRepository.create({
            id: uuid(),
            firstName,
            lastName,
        });
        return this.studentRepository.save(newStudent);
    }

    getStudents(): Promise<Array<StudentEntity>> {
        return this.studentRepository.find();
    }

}
