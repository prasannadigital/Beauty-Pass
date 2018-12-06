import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeautyTipsComponent } from './beauty-tips.component';
import { TestimonialsComponent } from './testimonials.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Admin'
    },
    children: [
      {
        path: 'beauty-tips',
        component: BeautyTipsComponent,
        data: {
          title: 'Beauty-Tips'
        }
      },
      {
        path: 'testimonials',
        component: TestimonialsComponent,
        data: {
          title: 'Testimonials'
        }
        
      },
      {
        path: 'employees',
        component: UsersComponent,
        data: {
          title: 'Employees'
        }
        
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
