import { Title } from '@angular/platform-browser';
import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base',
    },
    children: [
      {
        path: '',
        redirectTo: 'cards',
        pathMatch: 'full',
      },
      {
        path: 'receta',
        loadComponent: () =>
          import('./receta/receta.component').then((m) => m.RecetaComponent),
        data: {
          title: 'Receta',
        },
      },
      {
        path: 'reportes',
        loadComponent: () =>
          import('./reportes/reportes.component').then(
            (m) => m.ReportesComponent
          ),
        data: {
          title: 'Reportes',
        },
      },
    ],
  },
];
