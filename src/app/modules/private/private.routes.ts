import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { AboutUsComponent } from '../../pages/aboutus/about-us.component';
import { CompetitionsComponent } from '../../pages/competitions/competitions.component';
import { ContactUsComponent } from '../../pages/contactus/contact-us.component';
import { CulturesComponent } from '../../pages/cultures/cultures.component';
import { DonateComponent } from '../../pages/donate/donate.component';
import { EducationComponent } from '../../pages/education/education.component';
import { ForumComponent } from '../../pages/forum/forum.component';
import { JobsComponent } from '../../pages/jobs/jobs.component';
import { ProfileComponent } from '../../pages/profile/profile.component';
import { StoreComponent } from '../../pages/store/store.component';
import { SuggestionsComponent } from '../../pages/suggestions/suggestions.component';
import { ProjectDetailsComponent } from '../../pages/project-details/project-details.component';
import { EditProjectComponent } from '../../pages/edit-project/edit-project.component';
import { ProjectsComponent } from '../../pages/projects/projects.component';

const APP_ROUTES: Routes = [
  {
    path: 'app',
    component: PrivateComponent,
    children: [
      {
        component: DashboardComponent,
        path: 'dashboard'
      },
      {
        component: AboutUsComponent,
        path: 'aboutus'
      },
      {
        component: CompetitionsComponent,
        path: 'competitions'
      },
      {
        component: ContactUsComponent,
        path: 'contactus'
      },
      {
        component: CulturesComponent,
        path: 'cultures'
      },
      {
        component: DonateComponent,
        path: 'donate'
      },
      {
        component: EducationComponent,
        path: 'education'
      },
      {
        component: ForumComponent,
        path: 'forum'
      },
      {
        component: JobsComponent,
        path: 'jobs'
      },
      {
        component: ProfileComponent,
        path: 'profile'
      },
      {
        component: StoreComponent,
        path: 'store'
      },
      {
        component: SuggestionsComponent,
        path: 'suggestions'
      },
      {
        component: ProjectDetailsComponent,
        path: 'project-details'
      },
      {
        component: EditProjectComponent,
        path: 'edit-project'
      },
      {
        component: ProjectsComponent,
        path: 'projects'
      }
    ]
  }
];

export const PrivateRoutes = RouterModule.forChild(APP_ROUTES);