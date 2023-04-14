import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

  getdata : any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    let resp=this.userService.getAllTransaction();
    resp.subscribe((data)=>this.getdata = data);
  }

}
