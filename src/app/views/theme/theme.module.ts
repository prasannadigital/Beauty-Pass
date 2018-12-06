// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BeautyTipsComponent } from './beauty-tips.component';
import { TestimonialsComponent } from './testimonials.component';
import { UsersComponent } from './users.component';
// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';

import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxPaginationModule } from 'ngx-pagination';
import { AlertModule } from 'ngx-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';

// Dropdowns Component


@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    FormsModule
  ],
  declarations: [
    BeautyTipsComponent,
    TestimonialsComponent,
    UsersComponent
  ]
})
export class ThemeModule { }
