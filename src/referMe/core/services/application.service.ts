import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { ApiEndPoints } from 'src/referMe/configs/api-endpoints';
import { Registration } from 'src/referMe/modules/login/models/registration.model';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ApplicationService {

  constructor(private httpService: HttpService) { }

  getApplicationDetail(): Observable<any> {
    return this.httpService.Get<any>(ApiEndPoints.applicationDetail);
  }

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
}
