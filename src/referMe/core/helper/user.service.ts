import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiEndPoints } from 'src/referMe/configs/api-endpoints';
import { Registration } from 'src/referMe/modules/login/models/registration.model';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor(private httpService: HttpService) { }

  addUser(registrationDetail: Registration): Observable<any> {

    const reqHeader: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

    let user = {
      FirstName: registrationDetail.firstName,
      MiddleName: registrationDetail.middleName,
      LastName: registrationDetail.lastName,
      EmailAddress: registrationDetail.emailAddress,
      Mobile: registrationDetail.mobile,
      Password: registrationDetail.password
    }

    return this.httpService.Post<any>(ApiEndPoints.addUser, user, { headers: reqHeader }).pipe(map(data => {
      return data;
    }));
  }

  getAllUsers(): Observable<any> {
    return this.httpService.Get<any>(ApiEndPoints.allUser)
  }

  deleteUser(userId: number): Observable<any> {
    const params = new HttpParams().set('userId', `${userId}`);
    return this.httpService.Delete<any>(ApiEndPoints.deleteUser, { params: params })
  }

}
