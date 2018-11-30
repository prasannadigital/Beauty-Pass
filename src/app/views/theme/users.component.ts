import { Component, SecurityContext, ViewEncapsulation, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertConfig } from 'ngx-bootstrap/alert';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
declare var $: any;
export function getAlertConfig(): AlertConfig {
  return Object.assign(new AlertConfig(), { type: 'success' });
}

@Component({
  templateUrl: 'users.component.html',
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
export class UsersComponent implements OnInit {
  alerts: any[] = [{
    type: 'success',
    msg: `Testmonial Details Updated Successfully`,
    timeout: 5000
  }];
  totalItems: number;
  //categorysData: any;
  //editData: any = [];
  bigCurrentPage: number = 1;
  currentImage: any = '';
  bankuploadedFiles: any;
  myFiles: string[] = [];
  bankstmtImage: number = 0;
  data = [];
  uploadedFiles: any[] = [];
  userImageName = '';
  userimagePreview: any;
  userImage: string;
  hideModal = false;
  //deleteData: { tip_id: any; tip_title: any; tip_description: any; profile_name: any; rec_status: number; };
  alertMessageValue: boolean;
  validBtn: boolean;
  editData={
    'emp_name': '',
    'emp_password':'',
    'emp_email':'',
    "emp_address": "hyd",
    "emp_mobile": "",
    "emp_branch": "hyd",
    "emp_role": "1",
    "emp_status": "1"
    }
    categorysData: any;
    createdValue=false;
  deleteData: { employee_id: any; emp_name: any; emp_address: any; emp_mobile: any; emp_email: any; emp_password: any; emp_branch: any; emp_role: any; emp_status: number; };
  constructor(private service:LoginService,private router: Router, sanitizer: DomSanitizer) {
    this.alertsHtml = this.alertsHtml.map((alert: any) => ({
      type: alert.type,
      msg: sanitizer.sanitize(SecurityContext.HTML, alert.msg)
    }));
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
  editPromotion(data, index) {
    data.index = index;
    this.editData = data;
    console.log(this.editData)
  }
  updatePromotion(val) {
    let element = document.getElementById("CloseButton");
    console.log(val)
    var data = {
      employee_id: val.employee_id,
      emp_name: val.emp_name,
      emp_address: val.emp_address,
      emp_mobile: val.emp_mobile,
      emp_email: val.emp_email,
      emp_password: val.emp_password,
      emp_branch: val.emp_branch,
      emp_role:val.emp_role,
      emp_status: val.emp_status
    }
     if(!data.employee_id){
       this.addCreate();
     }
    this.service.rgisterSubmit(data).subscribe();

    element.click();
    this.categorysData = [];
    this.service.getEmpList().subscribe(response => {
      this.categorysData = response.json().data;
      console.log(this.categorysData);
      //this.addCreate();
    });
  }
  DeletePromotion(val) {
    console.log(val)
    var data = {
      employee_id: val.employee_id,
      emp_name: val.emp_name,
      emp_address: val.emp_address,
      emp_mobile: val.emp_mobile,
      emp_email: val.emp_email,
      emp_password: val.emp_password,
      emp_branch: val.emp_branch,
      emp_role:val.emp_role,
      emp_status: 0
    
    }
    this.deleteData = data;
  }
  deleteAlert() {
    this.service.rgisterSubmit(this.deleteData).subscribe();
    this.delete();
    this.categorysData = [];
    this.service.getEmpList().subscribe(response => {
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
  addCreate(): void {
    this.alertsDismiss.push({
      type: 'info',
      msg: `Created Sucessfully!`,
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
  onSubmit() {
    console.log(this.editData);
    this.updatePromotion(this.editData)
    // this.service.rgisterSubmit(this.editData).subscribe(response => {
    //   this.categorysData = response.json().data;
    //   console.log(this.categorysData);
    //   if(this.categorysData.employee_id!=""){
    //     this.createdValue=true;
    //   }else{
    //     this.createdValue=false;
    //   }
    
      //this.router.navigate(['dashboard'])
   // });
   // this.updatePromotion(this.editData);
  }
ngOnInit(){
  this.service.getEmpList().subscribe(response => {
    this.categorysData = response.json().data;
    console.log(this.categorysData)
  });
}
}