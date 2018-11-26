import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReferMeRoutingModule } from './referMe-routing.module';
import { ReferMeComponent } from './referMe.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    ReferMeComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
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
    
  }
}
