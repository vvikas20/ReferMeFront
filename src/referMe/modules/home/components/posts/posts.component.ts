import { Component, OnInit, ViewChild } from '@angular/core';
import { PostDetail } from '../../models/user-post.model';
import { JobpostService } from '../../services/jobpost.service';
import { AppUser } from 'src/referMe/core/models/app-user.model';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'referMe-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @ViewChild('frame') createPostModal: ModalDirective;

  postDetail: PostDetail;
  myPosts: Array<PostDetail>;

  experienceOptions: { label: string; value: number }[];

  constructor(private appUser: AppUser, private jobpostService: JobpostService) { }

  ngOnInit() {
    this.postDetail = new PostDetail();
    this.myPosts = [];
    this.prepareOptions();

    this.fetchMyPosts();
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
    this.jobpostService.getAllPostsByUser(this.appUser.userID).subscribe(next => {
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
        this.createPostModal.hide();
        this.fetchMyPosts();
      },
      error => {

      },
      () => { });
  }

  openModal() {
    this.postDetail = new PostDetail();
    this.postDetail.userID=this.appUser.userID;
    this.postDetail.contact=this.appUser.mobile;
    this.createPostModal.show();
  }
}
