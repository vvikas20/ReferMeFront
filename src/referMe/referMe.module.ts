import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReferMeRoutingModule } from './referMe-routing.module';
import { ReferMeComponent } from './referMe.component';

@NgModule({
  declarations: [
    ReferMeComponent
  ],
  imports: [
    BrowserModule,
    ReferMeRoutingModule
  ],
  providers: [],
  bootstrap: [ReferMeComponent]
})
export class ReferMeModule { }
