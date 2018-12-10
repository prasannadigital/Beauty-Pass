import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DefaultLayoutComponent } from './containers';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'reports',
        loadChildren: './views/base/base.module#BaseModule',
        data: {preload: true}
      },
      {
        path: 'refferal-rewards',
        loadChildren: './views/buttons/buttons.module#ButtonsModule',
        data: {preload: true}
      },
      {
        path: 'users-list',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule',
        data: {preload: true}
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
        data: {preload: true}
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule',
        data: {preload: true}
      },
      {
        path: 'testmonials',
        loadChildren: './views/notifications/notifications.module#NotificationsModule',
        data: {preload: true}
      },
      {
        path: 'admin',
        loadChildren: './views/theme/theme.module#ThemeModule',
        data: {preload: true}
      },
      {
        path: 'mind-body-coupons',
        loadChildren: './views/widgets/widgets.module#WidgetsModule',
        data: {preload: true}
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,
    {preloadingStrategy: PreloadAllModules}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
