<script setup>

import { RouterLink } from  "vue-router";

</script>

<template>
  <div class="container">
    <footer>
      <div class="footer-header">
        <ul class="footer-routes">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About Us</router-link>
          <router-link to="/resources">Resources</router-link>
        </ul>
      </div>
      <hr>
      <div class="footer-footer">
        <p id="copy" class="text-center">&copy; 2023 Company, Inc</p>
      </div>
    </footer>
  </div>
</template>

<style lang="sass" scoped>
.container
  padding-top: 60px
  margin-bottom: 50px
.footer-routes
  display: flex
  flex: 1
  justify-content: center
  gap: 30px
  list-style: none
  margin-bottom: 30px
  a
    text-decoration: none
    color: #5b5b5b
#copy
  padding-top: 30px
  text-align: center
  color: #5b5b5b

</style>