import { Component, OnInit } from '@angular/core';
import { JobpostService } from '../../services/jobpost.service';
import { UserPostDetail } from '../../models/user-post.model';

@Component({
  selector: 'referMe-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  userPostDetails: Array<UserPostDetail>;

  constructor(private jobpostService: JobpostService) { }

  ngOnInit() {
    this.userPostDetails = [];
    this.fetchAllJobPosts();
  }

  fetchAllJobPosts(): void {
    this.userPostDetails = [];
    this.jobpostService.getAllPosts().subscribe(next => {
      next.forEach(element => {
        this.userPostDetails.push({
          postDetail: {
            postID: element.PostDetail.PostID,
            userID: element.PostDetail.UserID,
            company: element.PostDetail.Company,
            position: element.PostDetail.Position,
            minExp: element.PostDetail.MinExp,
            maxExp: element.PostDetail.MaxExp,
            location: element.PostDetail.Location,
            contact: element.PostDetail.Contact,
            description: element.PostDetail.Description
          },
          userDetail: {
            userID: element.UserDetail.UserID,
            firstName: element.UserDetail.FirstName,
            middleName: element.UserDetail.MiddleName,
            lastName: element.UserDetail.LastName,
            emailAddress: element.UserDetail.EmailAddress,
            mobile: element.UserDetail.Mobile
          }
        });
      });
    },
      error => {

      },
      () => { });
  }
}
