import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {

  user : User = new User();
  getdata : any;
  date : Date;

  constructor(private registerService: UserService) { }

  ngOnInit(): void {

   timer(0, 1000).subscribe(()=>{
    this.date = new Date();
   })
  }

  

  saveRegister(){
    console.log(this.user);
    this.registerService.createRegister(this.user).subscribe();
  }
}
