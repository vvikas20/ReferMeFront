import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ReferralListComponent } from './referral-list/referral-list.component';
import { ReferralComponent } from './referral/referral.component';
import { ReferralFilterComponent } from './referral-filter/referral-filter.component';
import { SharedModule } from 'src/referMe/shared/shared.module';

@NgModule({
  declarations: [HomeComponent, ReferralListComponent, ReferralComponent, ReferralFilterComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
  /**
   *
   */
  constructor() {
    
  }
}
