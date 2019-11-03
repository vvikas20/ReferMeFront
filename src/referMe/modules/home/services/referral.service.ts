import { Injectable } from '@angular/core';
import { HttpService } from 'src/referMe/core/http/http.service';
import { Observable } from 'rxjs';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { ApiEndPoints } from 'src/referMe/configs/api-endpoints';
import { map } from 'rxjs/operators';
import { Referral } from '../models/referral.model';

@Injectable()
export class ReferralService {

  constructor(private httpService: HttpService) { }

  requestReferral(referralDetail: Referral): Observable<any> {

    const reqHeader: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

    let referral = {
      PostID: referralDetail.postId,
      To: referralDetail.to,
      Subject: referralDetail.subject,
      Message: referralDetail.message,
    }

    return this.httpService.Post<any>(ApiEndPoints.addReferral, referral, { headers: reqHeader }).pipe(map(data => {
      return data;
    }));
  }

  getPostReferrals(postId: number): Observable<any> {
    const params = new HttpParams().set('postId', `${postId}`);
    return this.httpService.Get<any>(ApiEndPoints.postReferrals, { params: params })
  }


}
