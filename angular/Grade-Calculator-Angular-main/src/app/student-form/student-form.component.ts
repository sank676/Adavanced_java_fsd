import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  @Input() student: Student | any;
  @Input() editMode: boolean | any;
  @Output() save = new EventEmitter<Student>();

  saveStudent() {
    this.save.emit(this.student);
  }
}

