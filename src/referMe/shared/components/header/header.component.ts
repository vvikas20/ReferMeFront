import { Component, OnInit } from '@angular/core';
import { AppUser } from 'src/referMe/core/models/app-user.model';

@Component({
  selector: 'referMe-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private appUser: AppUser) { }

  ngOnInit() {
  }

}
