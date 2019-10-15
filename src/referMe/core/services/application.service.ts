import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { ApiEndPoints } from 'src/referMe/configs/api-endpoints';

@Injectable()
export class ApplicationService {

  constructor(private httpService: HttpService) { }

  getApplicationDetail(): Observable<any> {
    return this.httpService.Get<any>(ApiEndPoints.applicationDetail);
  }
}
