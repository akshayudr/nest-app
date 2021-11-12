import { Controller, Get, Post, Put, Param, Body, ParseUUIDPipe } from "@nestjs/common";
import { CreateStudentDto, UpdateStudentDto, FindStudentResponseDto, StudentResponseDto } from './dto/student.dto';
import { StudentService } from './student.service';


@Controller('students')
export class StudentController {

    constructor(private readonly StudentService: StudentService){}
    
    @Get()
    getStudent(): FindStudentResponseDto[]{
        return this.StudentService.getStudents();
    }
    
    @Get("/:studentId")
    getStudentById(
        @Param('studentId', new ParseUUIDPipe()) studentId: string 
    ): FindStudentResponseDto{
        
        return this.StudentService.getStudentById(studentId);
    }

    @Post()
    createStudent(
        @Body() body : CreateStudentDto
    ): StudentResponseDto{
        
        return this.StudentService.createStudent(body);
    }

    @Put("/:studentId")
    updateStudentById(
        @Param('studentId', new ParseUUIDPipe()) studentId : string,
        @Body() body: UpdateStudentDto
    ):StudentResponseDto{
        return this.StudentService.updateStudentById(body, studentId);
    }
}