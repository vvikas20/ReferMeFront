import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'referMe-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  minExperience: { label: string; value: { id: number; name: string; }; }[];
  maxExperience: { label: string; value: { id: number; name: string; }; }[];

  selectedMinExperience: { label: string; value: any; };
  selectedMaxExperience: { label: string; value: any; };



  constructor() {
    this.minExperience = [
      { label: 'Min Experience', value: null },
      { label: '1', value: { id: 1, name: '1' } },
      { label: '2', value: { id: 2, name: '2' } },
      { label: '3', value: { id: 3, name: '3' } },
      { label: '4', value: { id: 4, name: '4' } },
      { label: '5', value: { id: 5, name: '5' } }
    ];
    this.maxExperience = [
      { label: 'Max Experience', value: null },
      { label: '1', value: { id: 1, name: '1' } },
      { label: '2', value: { id: 2, name: '2' } },
      { label: '3', value: { id: 3, name: '3' } },
      { label: '4', value: { id: 4, name: '4' } },
      { label: '5', value: { id: 5, name: '5' } }
    ];

    this.selectedMinExperience = { label: 'Min Experience', value: null };
    this.selectedMaxExperience = { label: 'Max Experience', value: null };
  }

  ngOnInit() {
  }

}
