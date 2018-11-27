import { Component,OnInit} from '@angular/core';
import { ReportsService } from '../../services/reports.service';
import { Router } from '@angular/router';
import { ExcelService } from '../../services/excel.service';
@Component({
  templateUrl: 'cards.component.html'
})
export class CardsComponent implements OnInit {
  categorysData: any;

  constructor(private router: Router,private service: ReportsService,private excelService:ExcelService) { }

ngOnInit(){
  this.service.getVoucherReports().subscribe(response => {
    this.categorysData = response.json().data;
    console.log(this.categorysData);
  });
}
exportAsXLSX():void {
  this.excelService.exportAsExcelFile(this.categorysData, 'Voucher-Reports');
}
}
