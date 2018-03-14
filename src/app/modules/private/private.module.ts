import { NgModule } from '@angular/core';

import { PrivateComponent } from './private.component';
import { DashboardModule } from '../../pages/dashboard/dashboard.module';
import { PrivateRoutes } from './private.routes';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [DashboardModule, PrivateRoutes, CommonModule],
  exports: [],
  declarations: [PrivateComponent],
  providers: [],
})
export class PrivateModule {
  // hold shares stuff that should be in the website which is available only to logged in users.
  // register stuff here
}
