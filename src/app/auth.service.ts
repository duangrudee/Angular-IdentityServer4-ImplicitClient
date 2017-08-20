import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '.././environments/environment';
import { UserManager, Log, MetadataService, User } from 'oidc-client';


const settings: any = {
    authority:  environment.identityServerEndpoint,
    client_id: 'implicit',
    redirect_uri: environment.myHostname + '/callback',
    post_logout_redirect_uri: environment.myHostname + '/logout',
    response_type: 'id_token token',
    scope: 'openid profile api email',
    loadUserInfo: true,
    automaticSilentRenew: true,
     filterProtocolClaims: true,
};

@Injectable()
export class AuthService {
    mgr: UserManager;

    constructor(private http: Http) {
        this.mgr = new UserManager(settings);
    }

    getCurrentUser() {
        return this.mgr.getUser();
    }

    signin() {
        this.mgr.signinRedirect();
    }

    signinRedirectCallback() {
        return this.mgr.signinRedirectCallback();
    }

    signout() {
        return this.mgr.signoutRedirect();
    }
}
