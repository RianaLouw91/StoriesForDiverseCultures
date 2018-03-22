import { ModuleWithProviders, NgModule } from '@angular/core';
import { ProjectsService } from './projects.service';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [ProjectsService],
})
export class ApiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [ProjectsService]

    }
  }
}
