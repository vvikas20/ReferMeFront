import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable()
export class HomeResolverService implements Resolve<any>{

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
