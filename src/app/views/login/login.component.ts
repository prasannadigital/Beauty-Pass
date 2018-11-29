import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  editData={
  'emailid': '',
  'password':''
  }
  categorysData: any;
  constructor(private router: Router,private service: LoginService) { }
  toDashBoard(){
    this.router.navigate(['dashboard'])
  }
  onSubmit() {
    console.log(this.editData);
    this.service.loginSubmit(this.editData).subscribe(response => {
      this.categorysData = response.json().data;
      console.log(this.categorysData);
      this.router.navigate(['dashboard'])
    });
   // this.updatePromotion(this.editData);
  }
}
