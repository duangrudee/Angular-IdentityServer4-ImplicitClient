import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Http, HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { SigninCallbackComponent } from './signin-callback/signin-callback.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninCallbackComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
