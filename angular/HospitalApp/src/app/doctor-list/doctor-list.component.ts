import { Component } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent {
  doctors: Doctor[] | undefined;
  constructor(private doctorService: DoctorService) { }
  ngOnInit() {
    this.doctors = this.doctorService.getDoctors();
  }
  selectDoctor(doctorId: number) {
    this.doctorService.selectDoctor(doctorId);
  }

}
