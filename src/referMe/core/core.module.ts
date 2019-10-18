import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnsureModuleLoadedOnceGuard } from './ensureModuleLoadedOnceGuard';
import { HttpService } from './http/http.service';
import { LoggerService } from './services/logger.service';
import { ApplicationService } from './services/application.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication/authentication.service';
import { AppUser } from './models/app-user.model';
import { UserService } from './services/user.service';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';
import { MessageService } from 'primeng/components/common/messageservice';
import { AlertService } from './helper/alert.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  exports: [],
  providers: [
    AdminGuard, AuthGuard, NoAuthGuard,
    HttpService, LoggerService, MessageService, AlertService, ApplicationService, UserService, AuthenticationService, AppUser]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

}
