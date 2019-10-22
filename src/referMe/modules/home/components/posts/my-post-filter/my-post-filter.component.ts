import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'referMe-my-post-filter',
  templateUrl: './my-post-filter.component.html',
  styleUrls: ['./my-post-filter.component.scss']
})
export class MyPostFilterComponent implements OnInit {

  selectedExperience: any;
  experience: any[];

  selectedSalary: any;
  salary: any[];

  constructor() { }

  ngOnInit() {
    this.experience = [
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '4', value: '4' },
      { label: '5', value: '5' }
    ];

    this.salary = [
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '4', value: '4' },
      { label: '5', value: '5' }
    ];

    this.selectedExperience = { label: '1', value: '1' };
    this.selectedSalary = { label: '1', value: '1' };
  }
}
