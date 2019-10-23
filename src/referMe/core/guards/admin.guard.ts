import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AppUser } from '../models/app-user.model';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private appUser: AppUser) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.appUser.userRole == 'ADMIN';
  }
}
