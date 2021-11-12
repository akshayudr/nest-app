import { StudentService } from '../student/student.service';
import { FindStudentResponseDto, StudentResponseDto } from '../student/dto/student.dto';
export declare class StudentTeacherController {
    private readonly studentService;
    constructor(studentService: StudentService);
    getStudent(teacherId: string): FindStudentResponseDto[];
    updateStudentTeacher(teacherId: string, studentId: string): StudentResponseDto;
}
