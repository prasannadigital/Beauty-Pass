import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertsComponent } from './alerts.component';
import { BadgesComponent } from './badges.component';
import { ModalsComponent } from './modals.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Testmonials'
    },
    children: [
      {
        path: 'written',
        component: AlertsComponent,
        data: {
          title: 'Written'
        }
      },
      {
        path: 'video',
        component: BadgesComponent,
        data: {
          title: 'Video'
        }
      },
      {
        path: 'written-edit',
        component: ModalsComponent,
        data: {
          title: 'Less Ratings'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule {}
