import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SigninCallbackComponent } from './signin-callback.component';
import { AuthService } from '../auth.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,        
    ],
    declarations: [SigninCallbackComponent],
    providers: [
       AuthService
    ]
})
export class SignInCallbackModule {
}
