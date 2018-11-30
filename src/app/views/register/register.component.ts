import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  editData={
    'emp_name': '',
    'emp_password':'',
    'emp_email':'',
    "emp_address": "hyd",
    "emp_mobile": "9876543210",
    "emp_branch": "hyd",
    "emp_role": "1",
    "emp_status": "1"
    }
    categorysData: any;
    createdValue=false;
  constructor(private service:LoginService,private router: Router,) { }
  onSubmit() {
    console.log(this.editData);
    this.service.rgisterSubmit(this.editData).subscribe(response => {
      this.categorysData = response.json().data;
      console.log(this.categorysData);
      if(this.categorysData.employee_id!=""){
        this.createdValue=true;
      }else{
        this.createdValue=false;
      }
    
      //this.router.navigate(['dashboard'])
    });
   // this.updatePromotion(this.editData);
  }
}
