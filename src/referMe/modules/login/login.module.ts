import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule } from 'src/referMe/shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    InputTextModule,
    SharedModule,
    LoginRoutingModule
  ]
})
export class LoginModule {
  /**
   *
   */
  constructor() {

  }
}
