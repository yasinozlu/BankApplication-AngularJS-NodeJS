import { Component, OnInit, OnDestroy } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [RegisterService, AlertifyService]
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private registerService: RegisterService, private alertifyService: AlertifyService, private router: Router) { }
  loginMusteri: any = {};
  message: any = {};
  ngOnInit() {
    if (this.registerService.isAuthenticated) {
      this.router.navigateByUrl('dashboard')
    }
    else {
      this.router.navigateByUrl('login')
    }
  }
  ngOnDestroy() {
  }

  login(loginMusteri) {
    this.registerService.login(loginMusteri)
  }


}
