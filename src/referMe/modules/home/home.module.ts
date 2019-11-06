import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/referMe/shared/shared.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { PostsComponent } from './components/posts/posts.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { ManagePostsComponent } from './components/manage-posts/manage-posts.component';
import { ManageJobsComponent } from './components/manage-jobs/manage-jobs.component';
import { TableModule } from 'primeng/table';
import { JobComponent } from './components/jobs/job/job.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { SidebarModule } from 'primeng/sidebar';
import { EditorModule } from 'primeng/editor';
import { DialogModule } from 'primeng/dialog';
import { PaginatorModule } from 'primeng/paginator';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ModalModule } from 'ngx-bootstrap';
import { MyPostComponent } from './components/posts/my-post/my-post.component';
import { JobpostService } from './services/jobpost.service';
import { HomeResolver } from './home-resolver.service';
import { RoleService } from './services/role.service';
import { ReferralService } from './services/referral.service';
import { CompanyService } from './services/company.service';
import { LocationService } from './services/location.service';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, SidebarComponent, MyAccountComponent, JobsComponent, PostsComponent, DashboardComponent, ManageUsersComponent, ManagePostsComponent, ManageJobsComponent, JobComponent, MyPostComponent],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    VirtualScrollerModule,
    SharedModule,
    ReactiveFormsModule,
    TableModule,
    PanelModule,
    OverlayPanelModule,
    EditorModule,
    DialogModule,
    PaginatorModule,
    ScrollPanelModule,
    AutoCompleteModule,
    ModalModule.forRoot(),
    HomeRoutingModule,
    SharedModule
  ],
  providers: [
    DatePipe,
    HomeResolver,
    JobpostService,
    RoleService,
    ReferralService,
    CompanyService,
    LocationService
  ]
})
export class HomeModule {

  constructor() { }

}
