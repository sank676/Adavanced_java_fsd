import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.css']
})
export class AllocationComponent implements OnInit {
  selectedDoctor: Doctor;
  patients: Patient[] = [];
  doctors: Doctor[] = [];

  constructor(private doctorService: DoctorService, private patientService: PatientService) { }
  ngOnInit() {
    this.doctorService.getDoctor.subscribe((doctor: Doctor) => {
      this.selectedDoctor = doctor;
      this.patients = this.patientService.getPatientById(doctor.id);
    });
  }
  allocatePatient(patient: PatientService) {
    this.patientService.allocateDoctor(patient, this.selectedDoctor);
  }
}
