import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralsRoutingModule } from './referrals-routing.module';
import { ReferralsComponent } from './referrals.component';
import { ReferralComponent } from './referral/referral.component';
import { ReferralFilterComponent } from './referral-filter/referral-filter.component';
import { SharedModule } from 'src/referMe/shared/shared.module';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// MDB Angular Free
import { ModalModule, WavesModule, InputsModule, ButtonsModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [ReferralsComponent, ReferralComponent, ReferralFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReferralsRoutingModule,
    InputTextModule,
    DropdownModule,
    SharedModule,
    WavesModule,
    ButtonsModule,
    InputsModule,
    ModalModule,
    ReactiveFormsModule
  ]
})
export class ReferralsModule { }
