import { Routes } from '@angular/router';

export const routes: Routes = [


  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./componentes/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'crm',
    loadComponent: () => import('./componentes/crm/crm').then((m) => m.Crm),
  },


];
