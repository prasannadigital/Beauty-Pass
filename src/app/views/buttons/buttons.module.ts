import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ButtonsComponent } from './buttons.component';
import { BrandButtonsComponent } from './brand-buttons.component';
import { NgxPaginationModule } from 'ngx-pagination';
// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DropdownsComponent } from './dropdowns.component';

// Buttons Routing
import { ButtonsRoutingModule } from './buttons-routing.module';
import { ModalModule, AlertModule, TypeaheadModule } from "ngx-bootstrap";
import { NgxSpinnerModule } from 'ngx-spinner';
// Angular

@NgModule({
  imports: [
    CommonModule,
    ButtonsRoutingModule,
    NgxPaginationModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    TypeaheadModule.forRoot(),
    NgxSpinnerModule,
    FormsModule
  ],
  declarations: [
    ButtonsComponent,
    DropdownsComponent,
    BrandButtonsComponent
  ]
})
export class ButtonsModule { }
