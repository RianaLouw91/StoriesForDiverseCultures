import { NgModule } from '@angular/core';

import { PrivateComponent } from './private.component';
import { DashboardModule } from '../../pages/dashboard/dashboard.module';
import { PrivateRoutes } from './private.routes';
import { NavBarComponent } from './components/navbar/nav-bar.component';
import { ApiModule } from '../../api/api.module';
import { SharedModule } from '../shared/shared.module';
import { AboutUsModule } from '../../pages/aboutus/about-us.module';
import { CompetitionsModule } from '../../pages/competitions/competitions.module';
import { ContactUsModule } from '../../pages/contactus/contact-us.module';
import { CulturesModule } from '../../pages/cultures/cultures.module';
import { DonateModule } from '../../pages/donate/donate.module';
import { EducationModule } from '../../pages/education/education.module';
import { ForumModule } from '../../pages/forum/forum.module';
import { JobsModule } from '../../pages/jobs/jobs.module';
import { ProfileModule } from '../../pages/profile/profile.module';
import { StoreModule } from '../../pages/store/store.module';
import { SuggestionsModule } from '../../pages/suggestions/suggestions.module';
import { ProjectDetailsModule } from '../../pages/project-details/project-details.module';
import { EditProjectModule } from '../../pages/edit-project/edit-project.module';
import { ProjectsModule } from '../../pages/projects/projects.module';


@NgModule({
  imports: [
    SharedModule,
    DashboardModule,
    PrivateRoutes,
    AboutUsModule,
    CompetitionsModule,
    ContactUsModule,
    CulturesModule,
    DonateModule,
    EducationModule,
    ForumModule,
    JobsModule,
    ProfileModule,
    StoreModule,
    SuggestionsModule,
    ProjectDetailsModule,
    EditProjectModule,
    ProjectsModule,
    ApiModule.forRoot()
  ],
  exports: [],
  declarations: [
    PrivateComponent,
    NavBarComponent
  ],
  providers: [],
})
export class PrivateModule {
  // hold shares stuff that should be in the website which is available only to logged in users.
  // register stuff here
}
