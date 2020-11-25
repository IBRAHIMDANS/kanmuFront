<template>
  <div class="form-head">
    <h1 class="form-head-title">{{ title }}</h1>
    <sub class="form-head-subtitle">{{description}}</sub>
  </div>
</template>
<script>
const FormHead = {
  props: {
    title: String,
    description: String,
  }
}

export default FormHead
</script>

<style>
.form-head-title{
  font-weight: bold;
  font-size: 50px;
  text-align: left;
  display:block;
  height:auto;
  width:100%;
}
.form-head-subtitle{
  font-size: 15px;
  font-style: italic;
  padding-bottom: 17px;
  text-align: left;
  display:block;
  height:auto;
  width:100%;
}
</style>


