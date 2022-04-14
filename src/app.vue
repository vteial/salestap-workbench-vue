<script lang="ts">
    import { defineComponent } from 'vue';
    import { RouterLink, RouterView } from 'vue-router'
    import router from '@/router'

    export default defineComponent({
      name: 'App',
      methods: {
        goTo(path: string){
            router.push(path);
        }
      }
    });
</script>

<template>
  <!--
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  -->
    <header class="p-3 bg-primary text-white">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <span class="fs-4">
                    <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">Vue Workbench</a>
                </span>
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><RouterLink to="/" class="nav-link px-2 text-secondary">Home</RouterLink></li>
                    <li><RouterLink to="/products" class="nav-link px-2 text-white">Products</RouterLink></li>
                </ul>
                <div class="text-end">
                    <button type="button" class="btn btn-outline-light me-2" @click="goTo('sign-in')">Sign In</button>
                    <button type="button" class="btn btn-warning" @click="goTo('sign-up')">Sign-up</button>
                </div>
            </div>
        </div>
    </header>
    <!--
    <div class="container">
        <div class="row my-1">
            <div class="col-md-4">
                <strong>{{viewName}}</strong>
            </div>
        </div>
    </div>
    -->
    <main class="border-bottom py-5">
        <RouterView />
    </main>
    <div class="container">
      <footer>
        <p class="text-center text-muted">&copy; 2022 Vue Workbench, Inc</p>
      </footer>
    </div>

</template>

<style>
    @import '@/assets/cosmo/bootstrap.css';
    main {
      min-height: 580px;
    }
</style>
