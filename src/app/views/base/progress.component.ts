import { Component, SecurityContext,OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertConfig } from 'ngx-bootstrap/alert';
import { Router } from '@angular/router';
import { RefferalRewardsService } from '../../services/refferal-rewards.service';
import { ExcelService } from '../../services/excel.service';
import { NgxSpinnerService } from 'ngx-spinner';
declare var jsPDF: any;
@Component({
  templateUrl: 'progress.component.html'
})
export class ProgressComponent implements OnInit {
  totalItems: number;
  categorysData: any;
  editData: any = [];
  bigCurrentPage: number = 1;
  constructor(private spinner: NgxSpinnerService,private excelService:ExcelService,private router: Router,private service: RefferalRewardsService ,sanitizer: DomSanitizer) {
   
   }
   ngOnInit() {
    this.spinner.show();
    this.service.getPerksList().subscribe(response => {
      this.categorysData = response.json().data;
      console.log(this.categorysData)
      this.spinner.hide();
    });
  
  }
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.categorysData, 'Perk-Reports');
  }
  pdfDownload() {
    var columns = [
      { title: "rewardpoint_name", dataKey: "rewardpoint_name" },
      { title: "rewardpoint_amount", dataKey: "rewardpoint_amount" },
      { title: "rewardpoint_status", dataKey: "rewardpoint_status" },
      { title: "rewardpoint_start_date", dataKey: "rewardpoint_start_date" },
      { title: "rewardpoint_end_date", dataKey: "rewardpoint_end_date" }
      
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
        doc.text("Perks",  30,30);      
      }
    });
    doc.save('Perks.pdf');
  }
}
