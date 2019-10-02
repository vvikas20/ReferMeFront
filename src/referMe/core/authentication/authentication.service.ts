import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { ApiEndPoints } from 'src/referMe/configs/api-endpoints';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable()
export class AuthenticationService {

  constructor(private httpService: HttpService) { }

  validateUser(username: string, password: string): Observable<any> {

    const reqHeader: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpService.Post<any>(ApiEndPoints.validateuser, { UserName: username, Password: password }, { headers: reqHeader }).pipe(map(data => {
      return data;
    }));

  }

}
