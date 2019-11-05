import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { JobpostService } from '../../services/jobpost.service';
import { UserPostDetail } from '../../models/user-post.model';

@Component({
  selector: 'referMe-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  userPostDetails: Array<UserPostDetail>;

  selectedExperience: any;
  experience: any[];

  selectedSalary: any;
  salary: any[];

  constructor(private jobpostService: JobpostService) { }

  ngOnInit() {
    this.prepareJobFilters();
    this.userPostDetails = [];
    this.fetchAllJobPosts();
  }

  private prepareJobFilters() {
    this.experience = [
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '4', value: '4' },
      { label: '5', value: '5' }
    ];
    this.salary = [
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '4', value: '4' },
      { label: '5', value: '5' }
    ];
    this.selectedExperience = { label: '1', value: '1' };
    this.selectedSalary = { label: '1', value: '1' };
  }

  fetchAllJobPosts(): void {
    this.userPostDetails = [];
    this.jobpostService.getOpenings().subscribe(next => {
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

  paginate(event) {
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
  }

}
