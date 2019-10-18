import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserPostDetail } from '../../../models/user-post.model';
import { AppUser } from 'src/referMe/core/models/app-user.model';

@Component({
  selector: 'referMe-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  @Input() userPostDetail: UserPostDetail;

  @ViewChild('frame') frame: any;

  contactFormModalEmail = new FormControl('', Validators.email);
  contactFormModalSubject = new FormControl('', Validators.required);
  contactFormModalMessage = new FormControl('', Validators.required);

  to: string = '';
  subject: string = '';
  message: string = '';

  constructor(private appUser: AppUser) { }

  ngOnInit() {

  }

  ngOnChange($event) {
    console.log($event)
  }

  requestReferral(): void {

    this.to = this.userPostDetail.userDetail.emailAddress;
    this.subject = `Referral Request for ${this.userPostDetail.postDetail.position} at ${this.userPostDetail.postDetail.company}`;
    this.message =
      `I am interested in applying for ${this.userPostDetail.postDetail.position} at ${this.userPostDetail.postDetail.company}
Thanks,
${this.appUser.firstName} ${this.appUser.lastName}
${this.appUser.emailAddress}
${this.appUser.mobile}`;

    this.frame.show();
  }

}