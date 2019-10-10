import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table'

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/referMe/shared/shared.module';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [AdminComponent, UsersComponent],
  imports: [
    CommonModule,
    TableModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
