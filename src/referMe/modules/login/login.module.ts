import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule } from 'src/referMe/shared/shared.module';
// MDB Angular Free
import { ModalModule, WavesModule, InputsModule, ButtonsModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    InputTextModule,
    SharedModule,
    LoginRoutingModule,
    ModalModule,
    WavesModule,
    InputsModule,
    ButtonsModule,
    ModalModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule {
  /**
   *
   */
  constructor() {

  }
}
