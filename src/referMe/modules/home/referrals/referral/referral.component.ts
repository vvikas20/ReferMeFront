import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'referMe-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.css']
})
export class ReferralComponent implements OnInit {

  @ViewChild('frame') frame: any;

  contactFormModalEmail = new FormControl('', Validators.email);
  contactFormModalSubject = new FormControl('', Validators.required);
  contactFormModalMessage = new FormControl('', Validators.required);

  to: string = '';
  subject: string = '';
  message: string = '';

  toDefault: string = "vsvikassingh49@gmail.com";
  subjectDefault: string = "Referral Request for Sr. Technical Program Manager @Amazon.com";
  messageDefault: string = "My name is vikas singh, I am from B.Tech. 2011-15 batch and I am interested in applying for Sr. Technical Program Manager at Amazon.com";

  constructor() { }

  ngOnInit() {
  }


  requestReferral(): void {

    this.to = this.toDefault;
    this.subject = this.subjectDefault;
    this.message = this.messageDefault;

    this.frame.show();
  }

}
