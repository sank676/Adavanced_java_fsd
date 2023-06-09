import { Component, OnInit } from '@angular/core';
import { Patient } from './patient.model';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  selectedPatient: Patient;

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patientService.selectedPatient.subscribe((patient: Patient) => {
      this.selectedPatient = patient;
    });
  }
}








