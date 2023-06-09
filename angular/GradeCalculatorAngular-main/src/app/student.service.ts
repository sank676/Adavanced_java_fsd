import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: Student[] = [];

  getStudents(): Student[] {
    return this.students;
  }
  
  addStudent(student: Student) {
    this.students.push(student);
  }

  updateStudent(updatedStudent: Student) {
    const index = this.students.findIndex((student) => student.name === updatedStudent.name);
    if (index !== -1) {
      this.students[index] = { ...updatedStudent };
    }
  }

  deleteStudent(student: Student) {
    const index = this.students.findIndex((s) => s.name === student.name);
    if (index !== -1) {
      this.students.splice(index, 1);
    }
  }

  calculateAverageGrade(grades: { [subject: string]: number }): number {
    const gradeValues = Object.values(grades);
    const totalGrades = gradeValues.reduce((sum, grade) => sum + grade, 0);
    return totalGrades / gradeValues.length;
  }
}
