import { CreateStudentDto, UpdateStudentDto, FindStudentResponseDto, StudentResponseDto } from './dto/student.dto';
import { StudentService } from './student.service';
export declare class StudentController {
    private readonly StudentService;
    constructor(StudentService: StudentService);
    getStudent(): FindStudentResponseDto[];
    getStudentById(studentId: string): FindStudentResponseDto;
    createStudent(body: CreateStudentDto): StudentResponseDto;
    updateStudentById(studentId: string, body: UpdateStudentDto): StudentResponseDto;
}
