import { Component, OnInit } from '@angular/core';
import { Doctor } from './doctor.model';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  selectedDoctor: Doctor;

  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.doctorService.selectedDoctor.subscribe((doctor: Doctor) => {
      this.selectedDoctor = doctor;
    });
  }
}

