import { Component, OnInit, ViewChild } from '@angular/core';
import { Registration } from 'src/referMe/modules/login/models/registration.model';
import { User } from '../../models/user.model';
import { UserService } from 'src/referMe/core/services/user.service';
import { AppUser } from 'src/referMe/core/models/app-user.model';
import { UserProfile } from '../../models/user-profile.model';
import { AlertService } from 'src/referMe/core/helper/alert.service';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'referMe-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  @ViewChild('resumeModal') resumeModal: ModalDirective;
  pdfSrc: string;

  loginErrorMessgae: string;
  registrationErrorMessgae: string;
  registrationMessage: string;

  userProfile: UserProfile;

  //Create blobUrl from blob object.
  blobUrl: string;


  constructor(private userService: UserService,
    private alertService: AlertService,
    private appUser: AppUser) { }

  ngOnInit() {
    this.loginErrorMessgae = '';
    this.registrationErrorMessgae = '';
    this.registrationMessage = '';
    this.blobUrl = '';
    this.getMyProfile();
  }

  getMyProfile() {
    this.userProfile = new UserProfile();
    this.userService.getUserProfile(this.appUser.userID).subscribe(
      next => {
        this.userProfile.userId = next.UserID;
        this.userProfile.firstName = next.FirstName;
        this.userProfile.middleName = next.MiddleName;
        this.userProfile.lastName = next.LastName;
        this.userProfile.emailAddress = next.EmailAddress;
        this.userProfile.mobile = next.Mobile;
        this.userProfile.profile = next.Profile == null ? null : `data:image/png;base64,${next.Profile}`;
        this.userProfile.resume = next.Resume == null ? '' : new Blob([this.base64ToArrayBuffer(next.Resume)]);
      },
      error => {

      },
      () => { });
  }

  base64ToArrayBuffer(base64: string) {
    const binaryString = window.atob(base64); // Comment this if not using base64
    const bytes = new Uint8Array(binaryString.length);
    return bytes.map((byte, i) => binaryString.charCodeAt(i));
  }

  createAndDownloadBlobFile(body, filename, extension = 'pdf') {
    const blob = new Blob([body]);
    const fileName = `${filename}.${extension}`;
    if (navigator.msSaveBlob) {
      // IE 10+
      navigator.msSaveBlob(blob, fileName);
    } else {
      const link = document.createElement('a');
      // Browsers that support HTML5 download attribute
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', fileName);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
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
        this.getMyProfile();
      },
      error => {

      },
      () => { });
  }

  downloadResume() {
    this.createAndDownloadBlobFile(this.userProfile.resume, `${this.appUser.firstName}_${this.appUser.lastName}`);
  }

  viewResume() {
    this.pdfSrc = URL.createObjectURL(this.userProfile.resume);
    this.resumeModal.show();
  }

  hideResume() {
    this.resumeModal.hide();
  }
}
