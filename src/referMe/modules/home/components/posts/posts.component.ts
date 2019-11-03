import { Component, OnInit, ViewChild } from '@angular/core';
import { PostDetail } from '../../models/user-post.model';
import { JobpostService } from '../../services/jobpost.service';
import { AppUser } from 'src/referMe/core/models/app-user.model';
import { AlertService } from 'src/referMe/core/helper/alert.service';


@Component({
  selector: 'referMe-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  display: boolean = false;
  postDetail: PostDetail;
  myPosts: Array<PostDetail>;

  selectedExperience: any;
  experience: any[];

  selectedSalary: any;
  salary: any[];

  experienceOptions: { label: string; value: number }[];

  constructor(private alertService: AlertService, private appUser: AppUser, private jobpostService: JobpostService) { }

  ngOnInit() {
    this.preparePostFilter();
    this.postDetail = new PostDetail();
    this.myPosts = [];
    this.prepareOptions();

    this.fetchMyPosts();
  }

  preparePostFilter() {
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

  prepareOptions() {
    this.experienceOptions = [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '4', value: 4 },
      { label: '5', value: 5 }
    ];
  }


  fetchMyPosts() {
    this.myPosts = [];
    this.jobpostService.getMyPosts().subscribe(next => {
      next.forEach(element => {
        this.myPosts.push({
          postID: element.PostID,
          userID: element.UserID,
          company: element.Company,
          position: element.Position,
          minExp: element.MinExp,
          maxExp: element.MaxExp,
          location: element.Location,
          contact: element.Contact,
          description: element.Description
        });
      });
    },
      error => {

      },
      () => { });
  }

  postJob() {
    this.jobpostService.createPost(this.postDetail).subscribe(
      next => {
        this.alertService.success('Succes', 'Post created successfully');
        this.display = false;
        this.fetchMyPosts();
      },
      error => {

      },
      () => { });
  }

  openModal() {
    this.postDetail = new PostDetail();
    this.display = true;
  }
}
