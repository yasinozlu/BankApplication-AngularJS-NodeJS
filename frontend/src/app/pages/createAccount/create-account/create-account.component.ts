import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { CreateAccountService } from 'src/app/services/create-account.service';
import { MusteriHesap } from 'src/app/services/MusteriHesap';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  constructor(private registerService: RegisterService, private createService: CreateAccountService) { }
  musteriHesap = new MusteriHesap();
  m = [];
  min = 10000000;
  max = 99999999;

  ngOnInit() {
    let b = this.random();
    let a = this.registerService.MusteriBilgi['_id'];
    this.musteriHesap.AcilisTarihi = Date.now();
    this.musteriHesap.Bakiye = 0;
    this.musteriHesap.KapanisTarihi = null;
    this.musteriHesap.hesapAcikMi = true;
    this.musteriHesap.hesapEkNumarasi = 5001;
    this.musteriHesap.hesapNumarasi = b;
    this.musteriHesap.musteriId = a;


  }

  create() {
    console.log(this.musteriHesap);
    this.createService.createAccount(this.musteriHesap);
  }







  random() {

    this.min = Math.ceil(this.min);
    this.max = Math.floor(this.max);

    return Math.floor(Math.random() * (this.max - this.min)) + this.min;
  }



}


