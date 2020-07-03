import { Component, OnInit } from '@angular/core';

interface Lab{
  value: string;
  id: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userName: string;
  userId: string;
  selectedLab: number;
  startTime: Date;
  endTime: Date;

  constructor() {
    
   }

  ngOnInit() {
    
  }

  //this value must come from api
  labs: Lab[] = [
      {value: 'Lab-1', id: 1},
      {value: 'Lab-2', id: 2},
      {value: 'Lab-3', id: 3},
      {value: 'Lab-4', id: 4},
      {value: 'Lab-5', id: 5},
  ];

  BookSlot(){
    console.log("Book Slot", this.userName, this.endTime, this.selectedLab );
  }

  CheckSlot(){
    console.log("Check Slot");
  }

}
