import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { PostsComponent } from './components/posts/posts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { ManageJobsComponent } from './components/manage-jobs/manage-jobs.component';
import { ManagePostsComponent } from './components/manage-posts/manage-posts.component';
import { AuthGuard } from 'src/referMe/core/guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
      { path: 'jobs', component: JobsComponent, canActivate: [AuthGuard] },
      { path: 'manageusers', component: ManageUsersComponent, canActivate: [AuthGuard] },
      { path: 'managejobs', component: ManageJobsComponent, canActivate: [AuthGuard] },
      { path: 'manageposts', component: ManagePostsComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
