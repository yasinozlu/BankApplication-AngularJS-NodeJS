import { Component, OnInit } from '@angular/core';
import { Havale } from './havale';
import { HavaleService } from 'src/app/services/havale.service';

@Component({
  selector: 'app-havale',
  templateUrl: './havale.component.html',
  styleUrls: ['./havale.component.scss']
})
export class HavaleComponent implements OnInit {

  constructor(private havaleservice: HavaleService) { }
  havale = new Havale();

  ngOnInit() {
  }

  gonder(havale) {
    console.log(havale)
    this.havaleservice.havaleGonder(havale);
  }

}
