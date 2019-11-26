import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserPostDetail } from '../../../models/user-post.model';
import { AppUser } from 'src/referMe/core/models/app-user.model';
import { ReferralService } from '../../../services/referral.service';
import { Referral } from '../../../models/referral.model';
import { AlertService } from 'src/referMe/core/helper/alert.service';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'referMe-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  @ViewChild('requestReferralModal') requestReferralModal: ModalDirective;
  @ViewChild('jobDetailModal') jobDetailModal: ModalDirective;
  @ViewChild('referralDetailModal') referralDetailModal: ModalDirective;

  @Input() userPostDetail: UserPostDetail;
  @Output() notifyRefresh = new EventEmitter();

  referral: Referral;

  constructor(private alertService: AlertService, private appUser: AppUser, private referralService: ReferralService) { }

  ngOnInit() {
    this.referral = new Referral();
  }

  ngOnChange($event) {

  }

  displayJobDetails(): void {
    this.jobDetailModal.show();
  }

  requestReferral(): void {
    this.jobDetailModal.hide();
    this.referral = new Referral();

    this.referral.postId = this.userPostDetail.postDetail.postID;
    this.referral.to = this.userPostDetail.userDetail.emailAddress;
    this.referral.subject = `Referral Request for ${this.userPostDetail.postDetail.position} at ${this.userPostDetail.postDetail.company}`;
    this.referral.message = `<p>I am interested in applying for the position of <strong>${this.userPostDetail.postDetail.position}</strong> at <strong>${this.userPostDetail.postDetail.company}</strong>.</p><p><br></p><p>Thanks,</p><p>${this.appUser.firstName} ${this.appUser.lastName}</p>`;

    this.requestReferralModal.show();
  }

  sendReferralRequest() {
    this.referralService.requestReferral(this.referral).subscribe(
      data => {
        this.alertService.success('SUCCESS', 'Referral requested successfully.');
        this.requestReferralModal.hide();
        this.notifyRefresh.emit();
      },
      error => {

      },
      () => { }
    );
  }

  hideModal() {
    this.requestReferralModal.hide();
  }

  hideJobDetailModal() {
    this.jobDetailModal.hide();
  }

  openReferralDetail() {
    this.referralDetailModal.show();
  }

  hideReferralDetail() {
    this.referralDetailModal.hide();
  }
}