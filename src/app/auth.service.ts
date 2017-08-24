import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '.././environments/environment';
import { UserManager, Log, MetadataService, User } from 'oidc-client';


const settings: any = {
    authority:  environment.identityServerEndpoint,
    client_id:  environment.client_id,
    redirect_uri: environment.myHostname + '/callback',
    post_logout_redirect_uri: environment.myHostname + '/logout',
    response_type: 'id_token token',
    scope: environment.scope,
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

    signout(user) {
        return this.mgr.signoutRedirect({ 'id_token_hint': user.id_token });
    }
}
