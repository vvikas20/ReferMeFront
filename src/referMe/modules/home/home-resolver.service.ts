import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { AppUser } from 'src/referMe/core/models/app-user.model';
import { UserService } from 'src/referMe/core/services/user.service';

@Injectable()
export class HomeResolver implements Resolve<any>{

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
    return this.userService.getMyDetails();
  }

  constructor(private userService: UserService) { }


}
