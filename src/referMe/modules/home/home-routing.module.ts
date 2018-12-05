import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from 'src/referMe/shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'referrals', pathMatch: 'full' },
  { path: 'referrals', loadChildren: './referrals/referrals.module#ReferralsModule' },
  { path: 'posts', loadChildren: './posts/posts.module#PostsModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
