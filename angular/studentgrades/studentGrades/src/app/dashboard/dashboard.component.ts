import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  students: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents()
      .subscribe(students => this.students = students);
  }

  calculateAverageGrade(grades: Grade[]): number {
    if (grades.length === 0) {
      return 0;
    }
    const sum = grades.reduce((total, grade) => total + grade.grade, 0);
    return sum / grades.length;
  }
}