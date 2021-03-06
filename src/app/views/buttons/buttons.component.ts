import { Component, SecurityContext, ViewEncapsulation,OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertConfig } from 'ngx-bootstrap/alert';
import { Router } from '@angular/router';
import { RefferalRewardsService } from '../../services/refferal-rewards.service';
import { NgxSpinnerService } from 'ngx-spinner';

// such override allows to keep some initial values

export function getAlertConfig(): AlertConfig {
  return Object.assign(new AlertConfig(), { type: 'success' });
}


@Component({
  templateUrl: 'buttons.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
  .alert-md-local {
    background-color: #009688;
    border-color: #00695C;
    color: #fff;
  }
  `
  ],
  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
})
export class ButtonsComponent implements OnInit {
  alerts: any[] = [{
    type: 'success',
    msg: `Testmonial Details Updated Successfully`,
    timeout: 5000
  }];
  totalItems: number;
  categorysData: any;
  editData: any = [];
  bigCurrentPage: number = 1;
  deleteData: { activity_id: any; activity_name: any; activity_points: any; activity_desc: any; activity_status: number; };
  userData: any;
  constructor(private spinner: NgxSpinnerService,private router: Router,private service: RefferalRewardsService ,sanitizer: DomSanitizer) {
    this.alertsHtml = this.alertsHtml.map((alert: any) => ({
      type: alert.type,
      msg: sanitizer.sanitize(SecurityContext.HTML, alert.msg)
    }));
   }
   ngOnInit() {
    this.spinner.show();
    this.service.getUserActivitiesList().subscribe(response => {
      this.categorysData = response.json().data;
      console.log(this.categorysData);
      this.userData=JSON.parse(localStorage.getItem('loginDetails'));
      console.log(this.userData[0].employee_id);
      this.spinner.hide();
    });
  
  }
   alertsHtml: any = [
    {
      type: 'success',
      msg: `<strong>Well done!</strong> You successfully read this important alert message.`
    },
    {
      type: 'info',
      msg: `<strong>Heads up!</strong> This alert needs your attention, but it's not super important.`
    },
    {
      type: 'danger',
      msg: `<strong>Warning!</strong> Better check yourself, you're not looking too good.`
    }
  ];
  onSubmit() {
    //console.log(this.editData.tip_title);
    this.updatePromotion(this.editData);
  }
  editPromotion(data, index) {
    data.index = index;
    this.editData = data;
    console.log(this.editData)
  }
  updatePromotion(val) {
    let element = document.getElementById("CloseButton");
    console.log(val)
    var data = {
      activity_id: val.activity_id,
      activity_name: val.activity_name,
      activity_points: val.activity_points,
      activity_desc: val.activity_desc,
      activity_status:val.activity_status
    }
    this.service.editUserActivitiesList(data).subscribe();
    this.add();
    element.click();
  }
  DeletePromotion(val) {
    console.log(val)
    var data = {
      activity_id: val.activity_id,
      activity_name: val.activity_name,
      activity_points: val.activity_points,
      activity_desc: val.activity_desc,
      activity_status: 0
    }
    this.deleteData=data;
  }
  deleteAlert(){
    this.service.editUserActivitiesList(this.deleteData).subscribe();
    this.delete();
    this.categorysData=[];
    this.service.getUserActivitiesList().subscribe(response => {
      this.categorysData = response.json().data;
      console.log(this.categorysData)
    });
  }
  alertsDismiss: any = [];
  add(): void {
    this.alertsDismiss.push({
      type: 'info',
      msg: `Updated Sucessfully!`,
      timeout: 5000
    });
  }
  delete(): void {
    this.alertsDismiss.push({
      type: 'danger',
      msg: `Deleted Sucessfully!`,
      timeout: 5000
    });
  }
}
