import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostDetail } from '../../../models/user-post.model';
import { JobpostService } from '../../../services/jobpost.service';
import { AlertService } from 'src/referMe/core/helper/alert.service';
import { User } from '../../../models/user.model';
import { ReferralService } from '../../../services/referral.service';
import { ReferralRequest } from '../../../models/referral.model';
import { DatePipe } from '@angular/common';
import { OverlayPanel } from 'primeng/overlaypanel';



@Component({
  selector: 'referMe-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.scss']
})
export class MyPostComponent implements OnInit {

  @Input() postDetail: PostDetail;
  @Output() notifyPostDelete = new EventEmitter();

  referralRequests: Array<ReferralRequest>;
  selectedReferralRequest: ReferralRequest;

  displayPostDetail: boolean = false;
  display: boolean = false;

  constructor(private datePipe: DatePipe, private alertService: AlertService, private jobpostService: JobpostService, private referralService: ReferralService) { }

  ngOnInit() {
    this.fetchReferralRequests();
  }

  ngOnChange($event) {

  }

  deletePost(postId: number) {
    this.jobpostService.deletePost(postId).subscribe(
      next => {
        this.alertService.success('Succes', 'Post deleted successfully');
        this.notifyPostDelete.emit();
      },
      error => {

      },
      () => { });
  }

  fetchReferralRequests() {
    this.selectedReferralRequest = new ReferralRequest();
    this.referralRequests = [];
    this.referralService.getPostReferrals(this.postDetail.postID).subscribe(
      next => {
        if (next != null) {
          next.forEach(element => {
            this.referralRequests.push({
              requestId: element.ReferralID,
              subject: element.Subject,
              message: element.Message,
              requestedOn: this.datePipe.transform(new Date(element.CreatedOn), 'dd-MM-yyyy'),
              firstName: element.CreatedByUserDetail.FirstName,
              middleName: element.CreatedByUserDetail.MiddleName,
              lastName: element.CreatedByUserDetail.LastName,
              emailAddress: element.CreatedByUserDetail.EmailAddress,
              mobile: element.CreatedByUserDetail.Mobile
            });
          });
        }
      },
      error => {

      },
      () => { });
  }

  showRequestDetails(event, request: ReferralRequest) {
    this.selectedReferralRequest = request;
    this.display = true;
  }
}
