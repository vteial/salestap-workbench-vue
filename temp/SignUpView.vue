<script lang="ts">
    import { defineComponent } from 'vue';
    import router from '@/router'

    export default defineComponent({
      name: 'Sign Up',
      data: () => {
        return { items: [] }
      },
      methods: {
        goTo(path: string){
          router.push(path);
        }
      },
      computed: {
        count() {
          return this.items.length
        }
      }
    });
</script>

<template>

  <div class="container">
    <h1>signup page works!</h1>
  </div>

</template>

<style>

</style>

