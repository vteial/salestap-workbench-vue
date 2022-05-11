import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import router from '@/router'

export default defineComponent({
  name: 'App',
  data() {
    return {
        appName: 'Workbench Vue'
    }
  },
  methods: {
    goTo(path: string) {
        router.push(path);
    },
    signOut() {

    }
  }
});
