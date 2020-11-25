<template>
  <nav class="menu">
    <div class="menu-container">
      <a href="/" class="logo">
        <img :src="require('../../assets/logo.png')"/>
      </a>
      <slot></slot>
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
  min-height: 60px;
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
.logo img{
  object-fit: contain;
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
}

body{
  padding-top:100px;
}
</style>
