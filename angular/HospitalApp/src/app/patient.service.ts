import { Injectable } from '@angular/core';
import { Patient } from './patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patients: Patient[] = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'David Johnson', age: 40 }
  ];

  getPatients(): Patient[] {
    return this.patients;
  }

  getPatientById(patientId: number): Patient {
    return this.patients.find(patient => patient.id === patientId);
  }

  allocateDoctor(patient: Patient, doctorId: number): void {
    patient.assignedDoctorId = doctorId;
  }
}
