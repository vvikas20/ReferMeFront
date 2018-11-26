import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './pipes/safe.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [SafePipe, PageNotFoundComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
