import { OpenIdConfiguration } from 'angular-auth-oidc-client';
export const environment = {
  production: false,
  authConfig: {
    authority: 'https://auth.staging.pictelai.com/realms/mw-dev',
    redirectUrl: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
    clientId: 'morphowiz-ui',
    scope: 'openid email profile roles', // TODO: add organisation_id and unit_id as scopes
    responseType: 'code',
    silentRenew: true,
    silentRenewUrl: window.location.origin + './silent-renew.html',
    renewTimeBeforeTokenExpiresInSeconds: 10,
    autoUserInfo: true,
    secureRoutes: [
      'https://api.staging.pictelai.com',
      'http://localhost:4200/api/',
    ],
  } as OpenIdConfiguration,
  serverUrl: 'https://api.staging.pictelai.com',
};
