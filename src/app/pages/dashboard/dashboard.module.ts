import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../modules/shared/shared.module';

@NgModule({
  imports: [SharedModule],
  exports: [HttpClientModule],
  declarations: [
    DashboardComponent
  ],
  providers: [HttpClientModule],
})
export class DashboardModule {
}
