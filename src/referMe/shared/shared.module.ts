import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './pipes/safe.pipe';
import { ToastModule } from 'primeng/toast';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [SafePipe, ToastComponent],
  imports: [
    CommonModule,
    ToastModule
  ],
  exports: [SafePipe, ToastComponent],
  providers: []
})
export class SharedModule { }
