import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

const APP_ROUTES: Routes = [
  {
    path: 'app',
    component: PrivateComponent,
    children: [
      {
        component: DashboardComponent,
        path: 'dashboard'
      }
    ]
  }
];

export const PrivateRoutes = RouterModule.forChild(APP_ROUTES);