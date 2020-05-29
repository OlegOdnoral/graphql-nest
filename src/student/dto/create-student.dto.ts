import { InputType, Field } from "@nestjs/graphql";
import { MinLength, MaxLength } from "class-validator";


@InputType()
export class CreateStudentDto {

    @MinLength(3)
    @MaxLength(15)
    @Field()
    firstName: string;

    @MinLength(3)
    @MaxLength(15)
    @Field()
    lastName: string;

}