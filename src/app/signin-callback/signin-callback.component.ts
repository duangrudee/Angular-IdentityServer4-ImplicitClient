import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-signin-callback',
  templateUrl: './signin-callback.component.html',
  styleUrls: ['./signin-callback.component.css']
})
export class SigninCallbackComponent implements OnInit {

  constructor(private authService: AuthService) { 
  }

  ngOnInit() {
    this.authService.signinRedirectCallback()
      .then( (user) => {
        localStorage.setItem('User', JSON.stringify(user));
      })
      .catch((err) => console.error(err));
  }

}
