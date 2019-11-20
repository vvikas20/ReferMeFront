import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/referMe/modules/login/models/registration.model';
import { User } from '../../models/user.model';
import { UserService } from 'src/referMe/core/services/user.service';
import { AppUser } from 'src/referMe/core/models/app-user.model';
import { UserProfile } from '../../models/user-profile.model';
import { AlertService } from 'src/referMe/core/helper/alert.service';

@Component({
  selector: 'referMe-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {


  loginErrorMessgae: string;
  registrationErrorMessgae: string;
  registrationMessage: string;

  userProfile: UserProfile;

  constructor(private userService: UserService,
    private alertService: AlertService,
    private appUser: AppUser) { }

  ngOnInit() {
    this.loginErrorMessgae = '';
    this.registrationErrorMessgae = '';
    this.registrationMessage = '';

    this.getMyDetail();
  }

  getMyDetail() {
    this.userProfile = new UserProfile();
    this.userService.getUserDetails(this.appUser.userID).subscribe(
      next => {
        this.userProfile.userId = next.UserID;
        this.userProfile.firstName = next.FirstName;
        this.userProfile.middleName = next.MiddleName;
        this.userProfile.lastName = next.LastName;
        this.userProfile.emailAddress = next.EmailAddress;
        this.userProfile.mobile = next.Mobile;
      },
      error => {

      },
      () => { });
  }

  onProfileSelect($event) {
    this.userProfile.profileImageFile = $event.files[0];
  }

  onResumeSelect($event) {
    this.userProfile.resumeFile = $event.files[0];
  }

  updateProfile() {

    this.userService.updateProfile(this.userProfile).subscribe(
      next => {
        this.alertService.success('Success', 'Profile updated Successfully');
        this.getMyDetail();
      },
      error => {

      },
      () => { });
  }
}
