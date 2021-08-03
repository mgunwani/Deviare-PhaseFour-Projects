import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent {

  constructor(private auth: AuthService) {
  }

  doLogin() {
    return !this.auth.isAuthenticated();
  }

}
