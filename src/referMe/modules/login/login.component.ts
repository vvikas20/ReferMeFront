import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApplicationService } from 'src/referMe/core/services/application.service';
import { AuthenticationService } from 'src/referMe/core/authentication/authentication.service';
import { Login } from './models/login.model';
import { AppUser } from 'src/referMe/core/models/app-user.model';
import { Router } from '@angular/router';
import { Registration } from './models/registration.model';
import { UserService } from 'src/referMe/core/services/user.service';

@Component({
  selector: 'referMe-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  applicationHeader: string;

  loginDetail: Login;
  registrationDetail: Registration;

  loginErrorMessgae: string;
  registrationErrorMessgae: string;
  registrationMessage: string;

  constructor(private router: Router, private appService: ApplicationService, private userService: UserService, private authService: AuthenticationService, private appUser: AppUser) { }

  ngOnInit() {

    this.loginErrorMessgae = '';
    this.registrationErrorMessgae = '';
    this.registrationMessage = '';
    this.applicationHeader = '';

    this.loginDetail = new Login();
    this.registrationDetail = new Registration();

    this.fetchApplicationDetails();
  }

  fetchApplicationDetails() {
    this.appService.getApplicationDetail().subscribe(
      next => {
        this.applicationHeader = next.heading;
      },
      error => {
      },
      () => { });
  }

  login() {

    if (this.loginDetail.email == '') {
      this.loginErrorMessgae = 'Email is required.';
      return;
    }
    else if (this.loginDetail.password == '') {
      this.loginErrorMessgae = 'Password is required.';
      return;
    }

    this.authService.validateUser(this.loginDetail.email, this.loginDetail.password).subscribe(
      next => {
        if (next != null) {

          this.appUser.userID = next.UserID;
          this.appUser.firstName = next.FirstName;
          this.appUser.middleName = next.MiddleName;
          this.appUser.lastName = next.LastName;
          this.appUser.emailAddress = next.EmailAddress;
          this.appUser.mobile = next.Mobile;

          //redirect to home page
          this.router.navigateByUrl('home');
        }
      },
      error => {
        this.loginErrorMessgae = error.error.message;
      },
      () => { });
  }

  register() {
    if (this.registrationDetail.firstName == '') {
      this.registrationErrorMessgae = 'First name is required.';
      return;
    }
    else if (this.registrationDetail.emailAddress == '') {
      this.registrationErrorMessgae = 'Email address is required.';
      return;
    }
    else if (!this.validateEmail(this.registrationDetail.emailAddress)) {
      this.registrationErrorMessgae = 'Enter a valid email address';
      return;
    }
    else if (this.registrationDetail.password == '') {
      this.registrationErrorMessgae = 'Password is required.';
      return;
    }
    else if (this.registrationDetail.password != this.registrationDetail.repassword) {
      this.registrationErrorMessgae = 'Password missmatch.';
      return;
    }

    this.appService.addUser(this.registrationDetail).subscribe(
      next => {
        this.registrationErrorMessgae = '';
        this.registrationMessage = 'Account created successfully.'
      },
      error => {
        this.registrationErrorMessgae = error.error.message;
      },
      () => { });
  }

  validateEmail(input): boolean {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
      return true;
    }
    return false;
  }

}
