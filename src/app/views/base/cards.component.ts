import { Component,OnInit} from '@angular/core';
import { ReportsService } from '../../services/reports.service';
import { Router } from '@angular/router';
import { ExcelService } from '../../services/excel.service';
declare var jsPDF: any;
@Component({
  templateUrl: 'cards.component.html'
})
export class CardsComponent implements OnInit {
  categorysData: any;
  startDate: any;

  constructor(private router: Router,private service: ReportsService,private excelService:ExcelService) { }

ngOnInit(){
  this.service.getVoucherReports().subscribe(response => {
    this.categorysData = response.json().data;
    console.log(this.categorysData);
  });
}
getDate(){
  console.log(this.startDate);
}
exportAsXLSX():void {
  this.excelService.exportAsExcelFile(this.categorysData, 'Voucher-Reports');
}
pdfDownload() {
  var columns = [
    { title: "coupons_for", dataKey: "coupons_for" },
    { title: "Used", dataKey: "Used" },
    { title: "Unused", dataKey: "Unused" },
    { title: "Expired", dataKey: "Expired" }
    
  ];

  var rows = this.categorysData;
  var doc = new jsPDF('');
  doc.autoTable(columns, rows, {
    styles: { fillColor: [100, 255, 255] },
    columnStyles: {
      id: { fillColor:[255,0,0] }
    },
    margin: { top: 50 },
    addPageContent: function () {
      doc.text("Vouchers",  30,30);      
    }
  });
  doc.save('Vouchers.pdf');
}
}
