import { Injectable } from '@angular/core';
import { HttpService } from 'src/referMe/core/http/http.service';
import { Observable } from 'rxjs';
import { ApiEndPoints } from 'src/referMe/configs/api-endpoints';
import { PostDetail, PostFilter } from '../models/user-post.model';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SearchParameter } from '../models/search-parameter.model';

@Injectable()
export class JobpostService {

  constructor(private httpService: HttpService) { }

  getOpenings(searchParameter: SearchParameter): Observable<any> {
    const reqHeader: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpService.Post<any>(ApiEndPoints.jobs, searchParameter, { headers: reqHeader });
  }

  getMyPosts(searchParameter: SearchParameter): Observable<any> {
    const reqHeader: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpService.Post<any>(`${ApiEndPoints.myposts}`, searchParameter, { headers: reqHeader });
  }

  createPost(postDetail: PostDetail): Observable<any> {

    const reqHeader: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

    let post = {
      UserID: postDetail.userID,
      Company: postDetail.company,
      Position: postDetail.position,
      MinExp: postDetail.minExp,
      MaxExp: postDetail.maxExp,
      Location: postDetail.location,
      Description: postDetail.description,
      Contact: postDetail.contact
    }

    return this.httpService.Post<any>(ApiEndPoints.createpost, post, { headers: reqHeader }).pipe(map(data => {
      return data;
    }));
  }

  deletePost(postId: number): Observable<any> {
    const params = new HttpParams().set('postId', `${postId}`);
    return this.httpService.Delete<any>(ApiEndPoints.deletepost, { params: params })
  }
}
