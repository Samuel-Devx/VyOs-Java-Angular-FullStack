import { Routes } from '@angular/router';
import { ErrorPageComponent } from './componentes/shared/error-page-component/error-page-component';

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
    {
    path: 'erro',
    component: ErrorPageComponent,
    data: {
      code: '500',
      title: 'Algo deu errado',
      message: 'Tivemos um problema inesperado. Tente novamente em instantes.',
      icon: 'pi-exclamation-triangle',
    },
  },
  {
    path: 'acesso-negado',
    component: ErrorPageComponent,
    data: {
      code: '403',
      title: 'Acesso negado',
      message: 'Você não tem permissão para ver esta página.',
      icon: 'pi-lock',
    },
  },
  { path: '**', component: ErrorPageComponent },

];
