import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './pipes/safe.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [SafePipe, FooterComponent, SidebarComponent, HeaderComponent, PageNotFoundComponent],
  imports: [CommonModule],
  exports: [SafePipe, FooterComponent, SidebarComponent, HeaderComponent, PageNotFoundComponent],
})
export class SharedModule { }
