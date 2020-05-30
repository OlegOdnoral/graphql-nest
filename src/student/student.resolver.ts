import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { StudentType } from './entities/student.type';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';


@Resolver(of => StudentType)
export class StudentResolver {

    constructor(
        private studentService: StudentService
    ) {}


    @Mutation(returns => StudentType)
    createStudent(
        @Args('createStudentDto') createStudentDto: CreateStudentDto
    ) {
        return this.studentService.createStudent(createStudentDto);
    }

    @Query(returns => StudentType)
    student(
        @Args('id') id: string
    ) {
        return this.studentService.getStudentById(id);   
    }

    @Query(returns => [StudentType])
    students() {
        return this.studentService.getStudents();
    }

}