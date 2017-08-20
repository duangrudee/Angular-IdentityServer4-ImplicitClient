import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IdentityServer4 OIDC Client Demo';

  constructor(private authService: AuthService) {

  }

  onLoginClicked() {
    this.authService.signin();

  }

  onLogoutClicked() {
    this.authService.signout();
  }
}
