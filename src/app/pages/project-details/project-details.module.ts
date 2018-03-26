import { NgModule, OnChanges } from '@angular/core';

import { ProjectDetailsComponent } from './project-details.component';
import { FlipCardComponent } from './components/flipcard/flip-card.component';
import { SharedModule } from 'primeng/shared';
import { CommonModule } from '@angular/common';
import 'rxjs/add/operator/map';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [
    ProjectDetailsComponent,
    FlipCardComponent
  ],
  providers: [],
})
export class ProjectDetailsModule{

}
