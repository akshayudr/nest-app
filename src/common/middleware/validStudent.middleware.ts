import {HttpException, Injectable, NestMiddleware} from '@nestjs/common';
import {Request, Response, NextFunction} from 'express';
import {students} from '../../db';

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction){
        console.log("This Middleware Was Called.");
        
        const studentId = req.params.studentId;
        const existStudent = students.some(student => {
            return student.id === studentId;
        });
        if(!existStudent){
            throw new HttpException("student not found", 400);
        }
        next()
    }

}