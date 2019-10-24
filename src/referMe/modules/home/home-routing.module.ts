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
import { AdminGuard } from 'src/referMe/core/guards/admin.guard';
import { HomeResolver } from './home-resolver.service';

const routes: Routes = [
  {
    path: '', component: HomeComponent, resolve: { user: HomeResolver },
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'jobs' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'posts', component: PostsComponent },
      { path: 'jobs', component: JobsComponent },
      { path: 'manageusers', component: ManageUsersComponent },
      { path: 'managejobs', component: ManageJobsComponent },
      { path: 'manageposts', component: ManagePostsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
