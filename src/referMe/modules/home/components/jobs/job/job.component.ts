import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserPostDetail } from '../../../models/user-post.model';
import { AppUser } from 'src/referMe/core/models/app-user.model';
import { ReferralService } from '../../../services/referral.service';
import { Referral } from '../../../models/referral.model';
import { AlertService } from 'src/referMe/core/helper/alert.service';

@Component({
  selector: 'referMe-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  @Input() userPostDetail: UserPostDetail;

  displayJobDetail: boolean = false;
  display: boolean = false;

  referral: Referral;

  constructor(private alertService: AlertService, private appUser: AppUser, private referralService: ReferralService) { }

  ngOnInit() {
    this.referral = new Referral();
  }

  ngOnChange($event) {

  }

  displayJobDetails(): void {
    this.displayJobDetail = true;
  }

  requestReferral(): void {
    this.displayJobDetail = false;
    this.referral = new Referral();

    this.referral.postId = this.userPostDetail.postDetail.postID;
    this.referral.to = this.userPostDetail.userDetail.emailAddress;
    this.referral.subject = `Referral Request for ${this.userPostDetail.postDetail.position} at ${this.userPostDetail.postDetail.company}`;
    this.referral.message = `<p>I am interested in applying for the position of <strong>${this.userPostDetail.postDetail.position}</strong> at <strong>${this.userPostDetail.postDetail.company}</strong>.</p><p><br></p><p><br></p><p><br></p><p>Thanks,</p><p>${this.appUser.firstName} ${this.appUser.lastName}</p><p>${this.appUser.emailAddress}</p><p>${this.appUser.mobile}</p>`;

    this.display = true;
  }

  sendReferralRequest() {
    this.referralService.requestReferral(this.referral).subscribe(
      data => {
        this.alertService.success('SUCCESS', 'Referral requested successfully.');
        this.display = false;
      },
      error => {

      },
      () => { }
    );
  }

}