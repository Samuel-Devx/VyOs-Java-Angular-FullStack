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
    path: 'contatos',
    loadComponent: () => import('./componentes/contatos/contatos').then((m) => m.Crm),
  },


];
