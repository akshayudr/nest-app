import { FindTeacherResponseDto } from './dto/teacher.dto';
export declare class TeacherService {
    private teachers;
    getTeacher(): FindTeacherResponseDto[];
    getTeacherBtyId(teacherId: string): FindTeacherResponseDto;
}
