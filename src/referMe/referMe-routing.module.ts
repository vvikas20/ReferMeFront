import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule' },
  { path: 'login', loadChildren: './modules/login/login.module#LoginModule' },
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ReferMeRoutingModule {
  /**
  *
  */
  constructor() {

  }
}
