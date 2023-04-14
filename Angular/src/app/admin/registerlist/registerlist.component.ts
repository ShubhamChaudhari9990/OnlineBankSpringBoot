import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-registerlist',
  templateUrl: './registerlist.component.html',
  styleUrls: ['./registerlist.component.css']
})
export class RegisterlistComponent implements OnInit {

  getdata : any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    // this.registers = [{
    //   "formNo": 1,
    //   "prefix": "Mr",
    //   "firstName": "shubahm",
    //   "middleName": "bapu",
    //   "lastName": "chaudhari",
    //   "dob": "31032000",
    //   "maritalStatus": "single",
    //   "gender": "male",
    //   "aadhar": "123456785678",
    //   "pan": "cbkpc2201pd",
    //   "address": "Sortapwadi tel havelo dist pune",
    //   "city": "pune",
    //   "state": "maharashtra",
    //   "country": "india",
    //   "countryCode": "+91",
    //   "mobile": "9729432456",
    //   "email": "shubham@gmail.com",
    //   "accountType": "savings",
    //   "cardno": "1234 5322 5452 3245",
    //   "pin": "471852",
    //   "service": "da",
    // }];

    let resp=this.userService.getAllRegisters();
    resp.subscribe((data)=>this.getdata = data);

  }
}
