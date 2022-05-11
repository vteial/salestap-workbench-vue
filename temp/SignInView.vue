<script lang="ts">
    import { defineComponent } from 'vue';
    import router from '@/router'

    export default defineComponent({
      name: 'Sign In',
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
    <h1>signin page works!</h1>
  </div>

</template>

<style>

</style>

