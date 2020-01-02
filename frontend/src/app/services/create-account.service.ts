import { Injectable } from '@angular/core';
import { MusteriHesap } from './MusteriHesap';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  constructor(private http: HttpClient, private router: Router, private alertifyService: AlertifyService) { }
  path = environment.path;
  musteri: any = [];

  createAccount(musteri: MusteriHesap) {

    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.http.post(this.path + '/musteriHesap/createBankAccount', musteri, { headers: headers }).subscribe(resp => {
      if (resp['message'] == "Önceden Olusturulmus Hesabiniz Vardir") {
        this.alertifyService.error(resp['message']);
        console.log(resp)
      }
      else {
        this.alertifyService.success(resp['message']);
        console.log(resp)
      }
    })

  }

}


