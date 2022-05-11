import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { vueKeycloak } from '@baloise/vue-keycloak'

import App from './app.vue'
import router from './router'

const app = createApp(App)

app.use(vueKeycloak, {
  initOptions: {
    onLoad: 'login-required',
  },
  config: {
    url: 'http://localhost:9999/auth',
    realm: 'workbench',
    clientId: 'workbench-app'
  },
  bearerExcludedUrls: ['/assets']
})

/*
app.use(vueKeycloak, async () => {
  return {
    config: {
      url: (await getAuthBaseUrl()) + '/auth',
      realm: 'workbench',
      clientId: 'workbench-app',
    },
    initOptions: {
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
    },
    bearerExcludedUrls: ['/assets']
  }
})
*/
app.use(createPinia())
app.use(router)

app.mount('#app')
