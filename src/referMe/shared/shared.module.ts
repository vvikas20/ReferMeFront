import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './pipes/safe.pipe';
import { ToastModule } from 'primeng/toast';
import { ToastComponent } from './components/toast/toast.component';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [SafePipe, ToastComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    TableModule,
    VirtualScrollerModule,
    ToastModule,
    PasswordModule,
    CardModule
  ],
  exports: [SafePipe,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    TableModule,
    VirtualScrollerModule,
    ToastComponent,
    PasswordModule,
    CardModule
  ],
  providers: []
})
export class SharedModule { }
