import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Doviz } from './Doviz'
import { tap, catchError } from "rxjs/operators";
import { forEach } from '@angular/router/src/utils/collection';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DovizService {

  constructor(private http: HttpClient, private router: Router) { }
  path = environment.path;
  errormessage = ''



  getDoviz(): Observable<Doviz[]> {
    return this.http.get<Doviz[]>(this.path + '/doviz/kur').pipe(tap(data => console.log(data)))

  }

  getGunceTarih() {
    return this.http.get(this.path + '/doviz/guncelDovizTarih').pipe(tap(data => console.log(data)))
  }


}
