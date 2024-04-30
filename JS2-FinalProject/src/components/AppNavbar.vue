<!-- script -->
<script setup>
// imports
import { RouterLink } from  "vue-router";
</script>

<template>

<header>
  <nav class="container">
    <!-- logo using router link -->
    <div class="branding">
      <router-link to="/">
        <div class="row">
          <div class="col-2">
            <img src="../assets/meepleLogo.png">
          </div>
          <div class="col ps-4 pt-1">
            <h1>Meet Your Meeples</h1>
          </div>
        </div>
      </router-link>
    </div>

    <!-- page links -->
    <ul class="nav-routes">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About Us</router-link>
      <router-link to="/resources">Resources</router-link>
      <!-- <router-link to="/" data-bs-toggle="modal" data-bs-target="#logInModal">Login</router-link> -->
    </ul>
  </nav>
</header>


</template>

<!-- style : scoped -->
<style lang="sass" scoped>
// importing personal scss
@import "../src/scss/_variables.scss"
#link
  text-decoration: none
header
  background-color: $blu-dark
  nav
    display: flex
    align-items: center
    height: 80px
    .branding
      display: flex
      align-items: center
      gap: 15px
      img
        max-width: 50px
      h1
        margin-top: 10px
        font-size: 24px
        color: $text-light
      a
        text-decoration: none

    .nav-routes
      margin-top: 20px
      display: flex
      flex: 1
      justify-content: flex-end
      gap: 30px
      list-style: none
      a
        text-decoration: none
        color: $text-light

#login-btn
  text-decoration: none
  color: black
  background-color: $pop-light
  border-color: $pop-light

</style>