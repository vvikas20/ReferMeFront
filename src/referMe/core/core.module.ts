import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnsureModuleLoadedOnceGuard } from './ensureModuleLoadedOnceGuard';
import { HttpService } from './http/http.service';
import { LoggerService } from './helper/logger.service';
import { ApplicationService } from './helper/application.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication/authentication.service';
import { AppUser } from './models/app-user.model';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  exports: [],
  providers: [HttpService, LoggerService, ApplicationService, AuthenticationService, AppUser]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

}
