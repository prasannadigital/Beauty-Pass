import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';
import { ChartJSComponent } from './chartjs.component';
import { ChartJSRoutingModule } from './chartjs-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    ChartJSRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule,
    NgxSpinnerModule,
    NgxPaginationModule
  ],
  declarations: [ ChartJSComponent ]
})
export class ChartJSModule { }
