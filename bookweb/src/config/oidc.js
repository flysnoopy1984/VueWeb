export const oidcSettings  ={
    authority: 'http://id4.iqianba.cn/',
    clientId: 'BookClientVue',
    clientSecret:'shanghai',
    // redirectUri: 'http://localhost:5002/oidc-callback',
    redirectUri: 'http://localhost:8080/signin-oidc',
    responseType: 'id_token',
    scope: 'openid profile'
}
