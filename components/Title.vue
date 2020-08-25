<template>
  <div class="title-container">
    <h1>Equipe de la semaine</h1>
  </div>
</template>

<style>
.title-container{
  width:100%;
  height:auto;
  padding:30px 146px;
  display:block;
  text-align:left;
}
h1{
  width:auto;
  max-width: 100%;
  height:auto;
  box-sizing: border-box;
  color:#000000;
  font-family: "Helvetica Neue",sans-serif;
  font-weight: bold;
  font-size: 30px;

  position:relative;
  display:inline-block;
}
h1:after{
  width:160px;
  height:5px;
  position:absolute;
  top:100%;
  left:0;
  margin-top:10px;
  content:"";
  background-color:#E82746;
}
</style>
