<template>
  <nav class="menu">
    <div class="menu-container">
      <a href="/">
      <img :src="require('../assets/logo.png')" class="logo" />
      </a>
      <span v-if="!isLogged">
        <router-link class="outline-button" to="/signup">Connexion</router-link>
        <router-link class="filled-button" to="/register">Inscription</router-link>
      </span>

    </div>
  </nav>
</template>
<script lang="ts">
export default {
  props: {
    isLogged: true,
  }
};

</script>

<style>
.menu {
  z-index: 5;
  height: auto;
  width: 100%;
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgb(255, 255, 255);
  text-align: center;
  padding: 22px 28px;
}

.menu-container {
  width: 100%;
  height: 100%;
  display: inline-flex;
  flex-flow: row;
  flex-wrap: nowrap;
  box-sizing: border-box;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;
}

.logo {
  object-fit: contain;
  width: 60px;
  height: 60px;
  max-height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

body {
  padding-top: 146px;
}
</style>
