import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { Musteri } from './musteri';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService) { }
  musteri = new Musteri();
  ngOnInit() {
  }

  register(musteri: Musteri) {

    this.registerService.register(musteri);


  }
}
