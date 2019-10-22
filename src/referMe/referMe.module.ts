import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReferMeRoutingModule } from './referMe-routing.module';
import { ReferMeComponent } from './referMe.component';
import { CoreModule } from './core/core.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    ReferMeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReferMeRoutingModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [ReferMeComponent]
})
export class ReferMeModule { }
