import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/referMe/modules/login/models/registration.model';
import { User } from '../../models/user.model';
import { UserService } from 'src/referMe/core/services/user.service';
import { AppUser } from 'src/referMe/core/models/app-user.model';

@Component({
  selector: 'referMe-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {


  loginErrorMessgae: string;
  registrationErrorMessgae: string;
  registrationMessage: string;

  selectedUser: User;

  constructor(private userService: UserService, private appUser: AppUser) { }

  ngOnInit() {
    this.loginErrorMessgae = '';
    this.registrationErrorMessgae = '';
    this.registrationMessage = '';

    this.getMyDetail();
  }

  getMyDetail() {
    this.selectedUser = new User();
    this.userService.getUserDetails(this.appUser.userID).subscribe(
      next => {
        this.selectedUser.userId = next.UserID;
        this.selectedUser.firstName = next.FirstName;
        this.selectedUser.middleName = next.MiddleName;
        this.selectedUser.lastName = next.LastName;
        this.selectedUser.emailAddress = next.EmailAddress;
        this.selectedUser.mobile = next.Mobile;
        this.selectedUser.roleId = next.UserRoleID;
      },
      error => {

      },
      () => { });
  }
}
