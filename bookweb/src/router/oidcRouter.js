import OidcCallback from '../components/oidc/OidcCallback.vue'
import OidcPopupCallback from '../components/oidc/OidcPopupCallback.vue'
import OidcCallbackError from '../components/oidc/OidcCallbackError.vue'

const routes = [

    {
      path: '/protected',
      name: 'protected',
      component: () => import(/* webpackChunkName: "protected" */ '../components/oidc/Protected.vue')
    },
    {
      path: '/signin-oidc', // Needs to match redirectUri in you oidcSettings
      name: 'oidcCallback',
      component: OidcCallback
    },
    {
      path: '/oidc-popup-callback', // Needs to match popupRedirectUri in you oidcSettings
      name: 'oidcPopupCallback',
      component: OidcPopupCallback
    },
    {
      path: '/oidc-callback-error', // Needs to match redirect_uri in you oidcSettings
      name: 'oidcCallbackError',
      component: OidcCallbackError,
      meta: {
        isPublic: true
      }
    }
  ];
  export default routes;