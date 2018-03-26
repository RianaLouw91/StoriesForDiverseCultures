import { NgModule } from '@angular/core';

import { ProjectsComponent } from './projects.component';
import { SharedModule } from '../../modules/shared/shared.module';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
    SharedModule,
    TableModule
  ],
  exports: [],
  declarations: [ProjectsComponent],
  providers: [],
})
export class ProjectsModule {
}
