export const oidcSettings = {
    authority: 'http://id4.iqianba.cn',
    clientId: 'BookClient',
    redirectUri: 'http://localhost:8080/oidc-callback',
    responseType: 'id_token',
    scope: 'openid profile ccApi offline_access'
  }