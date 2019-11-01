import { Injectable } from '@angular/core';
import { HttpService } from 'src/referMe/core/http/http.service';
import { Observable } from 'rxjs';
import { ApiEndPoints } from 'src/referMe/configs/api-endpoints';

@Injectable()
export class RoleService {

  constructor(private httpService: HttpService) { }

  getRoles(): Observable<any> {
    return this.httpService.Get<any>(`${ApiEndPoints.allRole}`);
  }
}
