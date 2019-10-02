import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApplicationService } from 'src/referMe/core/helper/application.service';
import { AuthenticationService } from 'src/referMe/core/authentication/authentication.service';
import { Login } from './models/login.model';
import { AppUser } from 'src/referMe/core/models/app-user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'referMe-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  applicationHeader: string;
  loginDetail: Login;

  constructor(private router: Router, private appService: ApplicationService, private authService: AuthenticationService, private appUser: AppUser) { }

  ngOnInit() {

    this.applicationHeader = '';
    this.loginDetail = new Login();

    this.fetchApplicationHeader();
  }

  fetchApplicationHeader() {
    this.appService.getApplicationDetail().subscribe(
      next => {
        this.applicationHeader = next.heading;
      },
      error => {
      },
      () => { });
  }

  login() {

    this.authService.validateUser(this.loginDetail.username, this.loginDetail.password).subscribe(
      next => {
        if (next != null) {
          this.appUser.firstName = next.FirstName;
          this.appUser.lastName = next.LastName;
          this.appUser.userName = next.UserName;
          this.appUser.email = next.Email;

          //redirect to home page
          this.router.navigate(['/home/referrals']);
        }
        else {
          alert('Wrong Credentials');
        }
      },
      error => {
      },
      () => { });
  }

}
