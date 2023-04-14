import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {

  date : Date;

  constructor() { }

  ngOnInit(): void {
   
    timer(0, 1000).subscribe(()=>{
      this.date = new Date();
     })
  }

}
