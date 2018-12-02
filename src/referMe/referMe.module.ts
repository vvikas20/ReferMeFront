import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ReferMeRoutingModule } from './referMe-routing.module';
import { ReferMeComponent } from './referMe.component';
import { CoreModule } from './core/core.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    ReferMeComponent
  ],
  imports: [
    BrowserModule,
    ReferMeRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [ReferMeComponent]
})
export class ReferMeModule {
  /**
   *
   */
  constructor() {

  }
}
