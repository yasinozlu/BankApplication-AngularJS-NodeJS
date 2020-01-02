import { Injectable } from '@angular/core';
import { Musteri } from '../pages/register/musteri';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { AlertifyService } from './alertify.service';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private router: Router, private alertifyService: AlertifyService) {
  }

  path = environment.path;
  TOKEN_KEY = "token";
  errorMessage = '';
  musteri: any = [];

  register(musteri: Musteri) {

    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.http.post(this.path + '/musteri/register', musteri, { headers: headers }).subscribe(resp => {
      console.log(resp)
      if (resp['message'] == "Kayit Basarili") {
        this.alertifyService.success(resp['message']);
        this.router.navigateByUrl('login')
      }
      if (resp['message'] == "Girdiginiz Kimlik Numarasi Sisteme Kayitli") {
        this.alertifyService.error(resp['message']);
      }
    })

  }

  login(musteri: Musteri) {

    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.http.post(this.path + '/musteri/login', musteri, { headers: headers }).subscribe(
      (data) => {
        this.alertifyService.success("Giriş Başarılı");
        this.saveToken(data['token'], data['musteri']);
        this.router.navigateByUrl('dashboard');
      }, (error) => {
        this.errorMessage = error['error'];
        this.alertifyService.error("Hatali Kullanici Adi veya Şifre")

      }
    );

  }


  /*goAdmin(musteri: Musteri) {

    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.http.get(this.path + '/musteri/list').subscribe(data => {
      console.log(data);
    });

  }*/





  saveToken(token, musteri) {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.musteri, JSON.stringify(musteri))


  }

  logOut() {
    localStorage.removeItem(this.TOKEN_KEY)
    localStorage.removeItem(this.musteri)
  }

  get isAuthenticated() {

    return !!localStorage.getItem('token')


  }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY)
  }

  get MusteriBilgi() {
    return JSON.parse(localStorage.getItem(this.musteri))
  }

}
