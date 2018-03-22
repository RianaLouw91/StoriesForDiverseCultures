import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'app/dashboard',
    pathMatch: 'full'
  }
];

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);
// , { enableTracing: true }