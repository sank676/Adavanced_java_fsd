import { Component } from '@angular/core';

interface Student {
  name: string;
  marks1: number;
  marks2: number;
  marks3: number;
  averageMarks: number;
  grade: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  students: Student[] = [];
  newStudent: Student = {
    name: '',
    marks1: 0,
    marks2: 0,
    marks3: 0,
    averageMarks: 0,
    grade: ''
  };
  showForm: boolean = false;
  editMode: boolean = false;
  editIndex: number = -1;

  toggleForm() {
    this.showForm = !this.showForm;
    this.resetForm();
  }

  addStudent() {
    // Calculate average marks
    this.newStudent.averageMarks = Math.round((this.newStudent.marks1 + this.newStudent.marks2 + this.newStudent.marks3) / 3);

    // Assign grade based on average marks
    if (this.newStudent.averageMarks >= 90) {
      this.newStudent.grade = 'A+';
    } else if (this.newStudent.averageMarks >= 80) {
      this.newStudent.grade = 'A';
    } else if (this.newStudent.averageMarks >= 70) {
      this.newStudent.grade = 'B';
    } else if (this.newStudent.averageMarks >= 60) {
      this.newStudent.grade = 'C';
    } else {
      this.newStudent.grade = 'F';
    }

    if (this.editMode) {
      // Update the existing student
      if (this.editIndex !== -1) {
        this.students[this.editIndex] = { ...this.newStudent };
      }
      this.editMode = false;
      this.editIndex = -1;
    } else {
      // Add the new student to the list
      this.students.push({ ...this.newStudent });
    }
    this.showForm=false;

    // Reset the form
    this.resetForm();
  }

  editStudent(student: Student, index: number) {
    // Set the form values to the selected student for editing
    this.newStudent = { ...student };
    this.editMode = true;
    this.editIndex = index;
    this.showForm = true;
  }

  deleteStudent(student: Student) {
    // Find the index of the student to delete in the students array
    const index = this.students.findIndex(
      (s) => s.name === student.name
    );

    // Remove the student from the array if found
    if (index !== -1) {
      this.students.splice(index, 1);
    }
  }

  private resetForm() {
    // Reset the form
    this.newStudent = {
      name: '',
      marks1: 0,
      marks2: 0,
      marks3: 0,
      averageMarks: 0,
      grade: ''
    };
  }
}
