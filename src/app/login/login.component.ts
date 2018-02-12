import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.message = '';
  }

  signIn(login: string, password: string): boolean {
    console.log('LoginComponent.signIn(login): "' + login + '"');
    console.log('LoginComponent.signIn(password): "' + password + '"');
    this.message = '';
    if (!this.authService.signIn(login, password)) {
      this.message = 'Incorrect creds.';
      setTimeout(
        function () {
          this.message = '';
        }.bind(this),
        2500
      );
    }
    return false;
  }

  signOut(): boolean {
    this.authService.signOut();
    return false;
  }
}
