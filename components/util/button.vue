<template>
  <a :class="_class" :href="href">
    <slot></slot>
  </a>
</template>

<script>
const Button = {
    props: {
    filled: {
      type: Boolean,
      default: false,
    },
    big: {
      type: Boolean,
      default: false,
    },
    href: String
  },
  computed: {
    _class: function(){
      const result = [this.filled ? "filled-button" : "outline-button"];

      if (this.big){
        result.push("big");
      }

      return result.join(" ");
    }
  }
}

export default Button;
</script>

<style>
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
  display:inline-block;
}

.filled-button.big,
.outline-button.big{
  padding:17px 21px;
  min-width:170px;
}

.outline-button{
  color:#E82746;
}
.filled-button{
  background-color:#E82746;
  color: rgb(255,255,255);
}
</style>
