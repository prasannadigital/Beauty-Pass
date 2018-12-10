import { Component, SecurityContext, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertConfig } from 'ngx-bootstrap/alert';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { FaqsService } from '../../../services/faqs.service';
declare var $: any;
export function getAlertConfig(): AlertConfig {
  return Object.assign(new AlertConfig(), { type: 'success' });
}

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
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
export class FaqsComponent implements OnInit {

  //@ViewChild('myForm') mytemplateForm : ngForm;
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
 
    categorysData: any;
    createdValue=false;
  //deleteData: { employee_id: any; emp_firstname: any; emp_address: any; emp_mobile: any; emp_email: any; emp_password: any; emp_branch: any; emp_role: any; emp_status: number; };
  userData: any;
  deleteData: { faq_id: any; faq_question: any; faq_answer: any; faq_createddate: any; faq_status: number; };
  editData={
    'faq_id': '',
    'faq_question':'',
    'faq_answer':'',
    'faq_createddate':'',
    }
  constructor(private spinner: NgxSpinnerService,private service:FaqsService,private router: Router, sanitizer: DomSanitizer) {
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
  clearData(){
    this.editData.faq_question='';
    this.editData.faq_answer='';
  }
  editPromotion(data, index) {
    data.index = index;
    this.editData = data;
    console.log(this.editData)
  }
  clearForm(){
    (<HTMLFormElement>document.getElementById("Login")).reset();
   }
  updatePromotion(val) {
    if(this.editData.faq_question!='' && this.editData.faq_answer!=''){
      let element = document.getElementById("CloseButton");
      console.log(val)
      var data = {
        faq_id: val.faq_id,
        faq_question: val.faq_question,
        faq_answer: val.faq_answer,
        faq_createddate: val.faq_createddate,
        faq_status: val.faq_status
      
      }
       if(!data.faq_id){
         this.addCreate();
         this.clearData();
       }
      this.service.rgisterSubmit(data).subscribe();
  
      element.click();
      this.categorysData = [];
      this.service.getList().subscribe(response => {
        this.categorysData = response.json().data;
        console.log(this.categorysData);
        //this.addCreate();
        this.clearForm();
      });
    }
    
  }
  DeletePromotion(val) {
    console.log(val)
    var data = {
      faq_id: val.faq_id,
      faq_question: val.faq_question,
      faq_answer: val.faq_answer,
      faq_createddate: val.faq_createddate,
      faq_status: 0
    
    }
    this.deleteData = data;
  }
  deleteAlert() {
    this.service.rgisterSubmit(this.deleteData).subscribe();
    this.delete();
    this.categorysData = [];
    this.service.getList().subscribe(response => {
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
  this.spinner.show();
  this.service.getList().subscribe(response => {
    this.categorysData = response.json().data;
    console.log(this.categorysData);
    this.userData=JSON.parse(localStorage.getItem('loginDetails'));
    console.log(this.userData[0].employee_id);
    this.spinner.hide();
  });
}
}
