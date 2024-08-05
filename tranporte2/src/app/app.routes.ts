import { Routes } from '@angular/router';



export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./business/authenticacion/login/login.component')
  },
  {
    path: '',
    loadComponent: () => import('./shared/components/layo/layo.component'),
    children: [
      {
        path: 'principal',
        loadComponent: () => import('./business/principal/principal.component')
      },
      {
        path: 'surcusales',
        loadComponent: () => import('./business/surcusales/surcusales.component')
      },
      {
        path: 'registros-viajes',
        loadComponent: () => import('./business/registros-viajes/registros-viajes.component')
      },
      {
        path: 'reportes',
        loadComponent: () => import('./business/reportes/reportes.component')
      },
      {
        path: 'resgister',
        loadComponent: () => import('./business/authenticacion/salir/resgister.component')
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
