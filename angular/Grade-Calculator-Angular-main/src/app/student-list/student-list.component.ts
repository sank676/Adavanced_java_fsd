import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }

  calculateAverageGrade(grades: any) {
    // Implement logic to calculate the average grade
  }

  editStudent(student: Student) {
    // Implement logic to edit a student
  }

  deleteStudent(student: Student) {
    // Implement logic to delete a student
  }

  addStudent() {
    // Implement logic to add a student
  }
}
