import { Component, OnInit } from '@angular/core';
import { AppUser } from 'src/referMe/core/models/app-user.model';
import { AuthenticationService } from 'src/referMe/core/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'referMe-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public appUser: AppUser, private authService: AuthenticationService) { }

  ngOnInit() {
  }


  logout(): void {
    this.authService.logoutUser();
    this.router.navigateByUrl('/login');
  }
}
