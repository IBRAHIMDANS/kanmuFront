<template>
  <div class="form-input-container">
    <label class="form-label" v-if="typeof label === 'string'" :for="id">{{label}}</label>
    <input class="form-input" :type="type" :name="name" :id="id" :placeholder="placeholder"/>
  </div>
</template>
<script>
const FormInput = {
  props: {
    type: {
      type: String,
      default: "text"
    },
    label: String,
    id: {
      type: String,
      default: function(){
        return "input-"+this.name;
      }
    },
    name: String,
    placeholder: String,
  }
}

export default FormInput
</script>

<style>
.form-input-container{
  padding: 10px 0;
  display:block;
  height:auto;
  width:100%;
  margin-top:10px;
}

.form-input-container .form-label{
  font-size:20px;
  text-align:left;
  display:block;
  height:auto;
  width:100%;
  margin:0;
  padding: 0 3px 10px 3px;
  box-sizing: border-box;
}

.form-input-container .form-input{
  font-size: 20px;
  line-height:25px;
  width: 100%;
  color:rgba(121, 118, 118, 1);
  border: 0 none transparent;
  border-bottom:1px solid rgb(0,0,0);
  display:block;
  height:auto;
  outline:none;
  padding:3px 9px;
  margin:0;
  box-sizing: border-box;
}
.form-input-container .form-input:focus{
  outline: none;
  border: 0 none transparent;
  border-bottom:1px solid rgb(0,0,0);
}
</style>


