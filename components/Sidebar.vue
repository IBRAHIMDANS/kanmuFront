<template>
  <div class="sidebar">
    <div class="sidebar-title">
      <h4>Kanmu</h4>
      <div class="app-divider">
        <md-divider></md-divider>
      </div>
    </div>
    <div class="app-btn-back">
      <router-link class="outline-button" to="/">
        <md-icon>left</md-icon>
        Retour
      </router-link>
      <router-link class="outline-button" to="/">
        <md-icon>favorite</md-icon>
        Favoris
      </router-link>
      <router-link class=" outline-button" to="/">
        <md-icon>like</md-icon>
        J'aime
      </router-link>
      <span class="like-counter"> 11,2 j'aimes</span>
    </div>
    <div>
    </div>
  </div>
</template>

<style>
.sidebar {
  height: 3000px;
  width: 391px;
  top: 0;
  left: 0;
  background-color: #E82746;
  overflow-x: hidden;
  padding-top: 20px;
}

.sidebar .sidebar-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: auto;
  flex-grow: 0;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
}

.sidebar-title h4 {
  text-align: center;
  color: #FFFFFF;
  width: auto;
  height: auto;
  line-height: 55px;
  font-size: 41px;
  font-weight: bold;
  font-family: "Helvetica Neue", sans-serif;
}

.sidebar-title sub {
  text-align: center;
  color: #FFFFFF;
  width: auto;
  height: auto;
  line-height: 14px;
  font-size: 14px;
  font-weight: normal;
  font-family: "Helvetica Neue", sans-serif;
}

.app-btn-back {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 1em 6em;
}

.like-counter {
  display: flex;
  justify-content: center;
  font: normal normal normal 18px/27px Helvetica Neue;
  letter-spacing: 0px;
  color: #ffffff;
}

.app-divider {
  display: flex;
  justify-content: center;
  margin-top: 1em;
}

.md-divider {
  width: 100px;
}
</style>
