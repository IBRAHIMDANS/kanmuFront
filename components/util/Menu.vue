<template>
  <nav class="menu">
    <div class="menu-container">
      <img :src="require('../../assets/logo.png')" class="logo"/>
      <router-link class="filled-button" to="/search">Allez sur la plateforme</router-link>
    </div>
  </nav>
</template>

<style>
.menu{
  z-index: 5;
  height:auto;
  width:100%;
  display:block;
  position:fixed;
  left:0;
  top:0;
  background-color: rgb(255,255,255);
  text-align: center;
  padding:22px 28px;
}
.menu-container{
  width:100%;
  height:100%;
  display:inline-flex;
  flex-flow: row;
  flex-wrap: nowrap;
  box-sizing: border-box;
  align-items: flex-end;
  justify-content: flex-end;
  position:relative;
}

.filled-button,
.outline-button{
  min-width:150px;
  height:auto;
  width:auto;
  border-radius:36px;
  box-shadow: rgba(0,0,0,0.16) 0 3px 6px;
  text-align: center;
  line-height:17px;
  font-size:14px;
  margin:15px;
  box-sizing: border-box;
  text-transform: uppercase;
  padding:13px 14px;
  text-decoration: none;
  font-family: "Helvetica Neue",sans-serif;
  font-weight: normal;
}

.outline-button{
  color:#E82746;
}
.filled-button{
  background-color:#E82746;
  color: rgb(255,255,255);
}

.logo{
  object-fit: contain;
  width:60px;
  height:60px;
  max-height: 100%;
  position:absolute;
  left:0;
  top:0;
}

body{
  padding-top:146px;
}
</style>
