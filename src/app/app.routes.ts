import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home/inbox',
    pathMatch: 'full',
  },
  {
    path: 'Home/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'percurso-main',
    loadComponent: () => import('./pages/percurso-main/percurso-main.page').then( m => m.PercursoMainPage)
  },
  {
    path: 'percurso1',
    loadComponent: () => import('./pages/percurso1/percurso1.page').then( m => m.Percurso1Page)
  },
  {
    path: 'percurso2',
    loadComponent: () => import('./pages/percurso2/percurso2.page').then( m => m.Percurso2Page)
  },
  {
    path: 'percurso3',
    loadComponent: () => import('./pages/percurso3/percurso3.page').then( m => m.Percurso3Page)
  },
  {
    path: 'terra-main',
    loadComponent: () => import('./pages/terra-main/terra-main.page').then( m => m.TerraMainPage)
  },
  {
    path: 'terra1',
    loadComponent: () => import('./pages/terra1/terra1.page').then( m => m.Terra1Page)
  },
  {
    path: 'terra2',
    loadComponent: () => import('./pages/terra2/terra2.page').then( m => m.Terra2Page)
  },
  {
    path: 'terra3',
    loadComponent: () => import('./pages/terra3/terra3.page').then( m => m.Terra3Page)
  },
  {
    path: 'terra4',
    loadComponent: () => import('./pages/terra4/terra4.page').then( m => m.Terra4Page)
  },
];
