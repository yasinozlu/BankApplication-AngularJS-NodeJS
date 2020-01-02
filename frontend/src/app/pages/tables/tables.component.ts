import { Component, OnInit } from '@angular/core';
import { DovizService } from 'src/app/services/doviz.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  constructor(private dovizServis: DovizService) { }

  ngOnInit() {
    this.dovizServis.getDoviz();
  }


}
