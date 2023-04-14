import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-deposite',
  templateUrl: './deposite.component.html',
  styleUrls: ['./deposite.component.css']
})
export class DepositeComponent implements OnInit {

  user : User = new User();

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
  }

  deposit() {
    console.log(this.userService)
    this.userService.depositUser(this.user).subscribe(data=>{
     alert("Deposit Successfully");
     this.router.navigate(["/atm"]);
    })
  }

}
