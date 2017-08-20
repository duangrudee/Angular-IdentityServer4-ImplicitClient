import { AngularIdentityServer4ImplicitClientPage } from './app.po';

describe('angular-identity-server4-implicit-client App', () => {
  let page: AngularIdentityServer4ImplicitClientPage;

  beforeEach(() => {
    page = new AngularIdentityServer4ImplicitClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
