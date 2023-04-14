import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/account';
import { AccountService } from 'src/app/account.service';
import { AtmComponent } from '../../atm/atm.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  type: string = "Password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  account:Account = new Account();

  data:any;
  
  
  constructor(private accountService: AccountService,private router: Router) { }

  ngOnInit(): void {
  }

  userLogin() {
   console.log(this.account)
   this.accountService.loginUser(this.account).subscribe(data=>{
    alert("Login Sucessfully");
    this.router.navigate(["/atm"]);
   },error=>alert("Please enter correct Card number and Password"));
  }
  
  // saveRegister(){
  //   console.log(this.user);
  //   this.registerService.createRegister(this.user).subscribe();
  // }

  hideShowPassword() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "Password"
  }
}