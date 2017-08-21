import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninCallbackComponent } from './signin-callback/signin-callback.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [    
    { path: 'logout', component: LogoutComponent },   // same module as login page
    { path: 'callback', component: SigninCallbackComponent },    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
