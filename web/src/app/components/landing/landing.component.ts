import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CountdownConfig } from 'ngx-countdown';
import { format } from 'date-fns';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {
  config: CountdownConfig = {
    leftTime: 1655560800,
    format: 'yyyy-MM-dd E HH:mm:ss a',
    formatDate: ({ date, formatStr }) => format(date, formatStr),
  };
  constructor() { }

  ngOnInit(): void {
  }


  handleEvent($event){

  }

}
