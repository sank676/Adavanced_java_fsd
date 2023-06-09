import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  doctors: Doctor[] = [
    { id: 1, name: 'Dr. John Doe', specialization: 'Cardiology' },
    { id: 2, name: 'Dr. Jane Smith', specialization: 'Pediatrics' },
    { id: 3, name: 'Dr. David Johnson', specialization: 'Orthopedics' },
  ];
  selectedDoctorId: number | undefined;
  getDoctors(): Doctor[] {
    return this.doctors;
  }
  selectDoctor(doctorId: number) {
    this.selectedDoctorId = doctorId;
  }

  constructor() { }
}
