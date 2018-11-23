import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReferMeRoutingModule } from './referMe-routing.module';
import { ReferMeComponent } from './referMe.component';
import { SafePipe } from './shared/pipes/safe.pipe';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    ReferMeComponent,
    SafePipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReferMeRoutingModule
  ],
  providers: [],
  bootstrap: [ReferMeComponent]
})
export class ReferMeModule {
  /**
   *
   */
  constructor() {
    alert('Inside:ReferMeModule');
  }
}
