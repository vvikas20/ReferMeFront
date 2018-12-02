import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'referMe-referral-filter',
  templateUrl: './referral-filter.component.html',
  styleUrls: ['./referral-filter.component.css']
})
export class ReferralFilterComponent implements OnInit {

  selectedExperience: any;
  experience: any[];

  selectedSalary: any;
  salary: any[];

  constructor() {

    this.experience = [
      { label: 'Experience', value: null },
      { label: '1', value: { id: 1, name: '1' } },
      { label: '2', value: { id: 2, name: '2' } },
      { label: '3', value: { id: 3, name: '3' } },
      { label: '4', value: { id: 4, name: '4' } },
      { label: '5', value: { id: 5, name: '5' } }
    ];

    this.salary = [
      { label: 'Salary', value: null },
      { label: '1', value: { id: 1, name: '1' } },
      { label: '2', value: { id: 2, name: '2' } },
      { label: '3', value: { id: 3, name: '3' } },
      { label: '4', value: { id: 4, name: '4' } },
      { label: '5', value: { id: 5, name: '5' } }
    ];

    this.selectedExperience = { label: 'Experience', value: null };
    this.selectedSalary = { label: 'Salary', value: null };
  }

  ngOnInit() {
  }

}
