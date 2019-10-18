import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostDetail } from '../../../models/user-post.model';
import { JobpostService } from '../../../services/jobpost.service';
import { AlertService } from 'src/referMe/core/helper/alert.service';



@Component({
  selector: 'referMe-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.scss']
})
export class MyPostComponent implements OnInit {

  @Input() postDetail: PostDetail;
  @Output() notifyPostDelete = new EventEmitter();

  constructor(private alertService: AlertService, private jobpostService: JobpostService) { }

  ngOnInit() {
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
}
