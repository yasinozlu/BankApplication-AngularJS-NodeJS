import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { MusteriBilgi } from 'src/app/services/MusteriBilgi';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [RegisterService]
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  musteri: any[];
  public location: Location;
  constructor(location: Location, private element: ElementRef, private router: Router, private registerService: RegisterService) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.musteri = this.registerService.MusteriBilgi;
    console.log(this.musteri)
  }
  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }

  logout() {

    this.registerService.logOut();
    this.router.navigate(['login']);
  }
}
