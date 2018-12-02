import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferralsComponent } from './referrals.component';
import { PageNotFoundComponent } from 'src/referMe/shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: ReferralsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferralsRoutingModule { }
