import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { SharedModule } from 'src/referMe/shared/shared.module';
import { MypostComponent } from './mypost/mypost.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalModule, InputsModule, ButtonsModule, WavesModule } from 'angular-bootstrap-md';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [PostsComponent, MypostComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
    InputTextModule,
    DropdownModule,
    SharedModule,
    WavesModule,
    ButtonsModule,
    InputsModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PostsModule { }
