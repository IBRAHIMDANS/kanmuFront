<template>
  <div class="form-container">
    <div class="right" :style="{backgroundImage: 'url('+image+')'}"></div>
    <div class="left">
      <div class="wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
const FromContainer = {
  props: {
    image: String
  }
}

export default FromContainer
</script>

<style>
  .form-container{
    display:block;
    width:100%;
    height:auto;
    min-height:100vh;
    position: absolute;
    left:0;
    top:0;
    padding-top: 70px;
    box-sizing: border-box;
  }
  .form-container .left{
    width:50%;
    height:auto;
    display:block;

    text-align: center;
  }

  .form-container .left .wrapper{
    width:600px;
    max-width: 100%;
    padding:17px;
    box-sizing: border-box;
    display:inline-block;
    margin-top:70px;
  }

  .form-container .right{
    width:40%;
    height:90%;
    position:absolute;
    right:5%;
    top:5%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>


