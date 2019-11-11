import { Injectable } from '@angular/core';
import { HttpService } from 'src/referMe/core/http/http.service';
import { Observable } from 'rxjs';
import { ApiEndPoints } from 'src/referMe/configs/api-endpoints';
import { PostDetail, PostFilter } from '../models/user-post.model';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class JobpostService {

  constructor(private httpService: HttpService) { }

  getOpenings(): Observable<any> {
    return this.httpService.Get<any>(ApiEndPoints.jobs)
  }

  getMyPosts(postFilter: PostFilter): Observable<any> {
    let searchParameter = {
      Filters: [],
      GlobalFilter: '',
      SortMeta: null,
      Page: 1,
      Rows: 100,
      DefaultSortField: '',
      DefaultSortOrder: 1
    };

    if (postFilter.company != '') searchParameter.Filters.push({ Field: 'company', Value: postFilter.company });
    if (postFilter.location != '') searchParameter.Filters.push({ Field: 'location', Value: postFilter.location });
    if (!(postFilter.minExp == 0 && postFilter.maxExp == 0)) {
      searchParameter.Filters.push({ Field: 'minExp', Value: postFilter.minExp });
      searchParameter.Filters.push({ Field: 'maxExp', Value: postFilter.maxExp });
    }

    return this.httpService.Post<any>(`${ApiEndPoints.myposts}`, searchParameter, {});
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
