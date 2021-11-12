import { FindStudentResponseDto, CreateStudentDto, StudentResponseDto, UpdateStudentDto } from './dto/student.dto';
export declare class StudentService {
    private students;
    getStudents(): FindStudentResponseDto[];
    getStudentById(studentId: string): FindStudentResponseDto;
    createStudent(payload: CreateStudentDto): StudentResponseDto;
    updateStudentById(payload: UpdateStudentDto, studentId: string): StudentResponseDto;
    getStudentsByTeacherId(teacherId: string): FindStudentResponseDto[];
    updateStudentTeacher(teacherId: string, studentId: string): StudentResponseDto;
}
