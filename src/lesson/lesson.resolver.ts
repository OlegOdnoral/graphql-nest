import { Resolver, Query, Mutation, Args, ResolveField, Parent } from "@nestjs/graphql";
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './dto/create-lesson.dto';
import { AssignStudentsToLessonInputType } from "./entities/assign-students-to-lesson-Input.type";
import { Lesson } from './entities/lesson.entity';
import { StudentService } from './../student/student.service';

@Resolver(of => LessonType)
export class LessonResolver {

    constructor(
        private lessonService: LessonService,
        private studentService: StudentService
    ) {}

    @Query(returns => LessonType)
    lesson(
        @Args('id') id: string,
    ) {
        return this.lessonService.getLesson(id);
    }

    @Query(returns => [LessonType])
    lessons() {
        return this.lessonService.getAllLessons();
    }

    @Mutation(returns => LessonType)
    createLesson(
        @Args('createLessonInput') createLessonInput: CreateLessonInput
    ) {
        return this.lessonService.createLesson(createLessonInput);
    }

    @Mutation(returns => LessonType)
    assignStudentsToLesson(
        @Args('assignStudentsToLessonInput') assignStudentsToLesson: AssignStudentsToLessonInputType
    ) {
        const { lessonId, studentIds } = assignStudentsToLesson;
        return this.lessonService.assignStudentsToLesson(lessonId, studentIds);
    }

    @ResolveField()
    async students(@Parent() lesson: Lesson) {
        return this.studentService.getManyStudents(lesson.students);
    }

}