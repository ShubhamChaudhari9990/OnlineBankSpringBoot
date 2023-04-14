import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/admin';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  type: string = "Password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  admin:Admin = new Admin();
  
  constructor(private adminService: AdminService,private router: Router) { }

  ngOnInit(): void {
  }

  userLogin() {
   console.log(this.admin)
   this.adminService.loginAdmin(this.admin).subscribe(data=>{
    
    alert("Admin Login Sucessfully");
    this.router.navigate(["/registerlist"]);
   },error=>alert("Please enter correct Card number and Password"));
  }

  hideShowPassword() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "Password"
  }

}
