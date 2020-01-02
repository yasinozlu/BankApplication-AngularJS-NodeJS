import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'

import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Havale } from '../pages/havale/havale';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class HavaleService {

  constructor(private http: HttpClient, private router: Router, private alertifyService: AlertifyService) { }
  path = environment.path;
  havale: any = [];

  havaleGonder(havale: Havale) {

    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.http.put(this.path + '/musteriHesap/havale', havale, { headers: headers }).subscribe(resp => {
      console.log(resp)

      if (resp['message'] == "Hesap Numarasi Bulunamadi") {
        this.alertifyService.error(resp['message']);
      } else if (resp['message'] == "Bakiye Yatirma İslemi Gerceklestirildi") {
        this.alertifyService.success(resp['message'])
      }

    });


  }
}
