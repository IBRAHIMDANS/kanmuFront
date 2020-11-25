<template>
  <div class="checkbox-container">
    <input class="checkbox" type="checkbox" :name="name" :id="id"/>
    <label class="checkbox-label" v-if="typeof label === 'string'" :for="id">{{label}}</label>
  </div>
</template>
<script>
const FormInput = {
  props: {
    label: String,
    id: {
      type: String,
      default: function(){
        return "input-"+this.name;
      }
    },
    name: String,
  }
}

export default FormInput
</script>

<style>
.checkbox-container{
  width:100%;
  height:auto;
  margin:0;
  display:flex;
  align-items: center;
  align-content: center;
  padding:15px 0;
}

.checkbox-label{
  width:100%;
  flex-shrink: 1;
  flex-grow: 1;
  height:auto;
  text-align:left;
  margin:7px;
}
.checkbox{
  border: solid 1px #727272;
  width: 20px;
  height: 20px;
  margin:5px 10px;
  flex-shrink: 0;
  flex-grow: 0;
  content: "\2714";
  appearance:none;
  border-radius: 3px;
  outline: none;
  position: relative;
}
.checkbox:after{
  content: "\2714";
  width:auto;
  height:auto;
  line-height:1;
  font-size: 9px;
  display:inline-block;
  position: absolute;
  left:50%;
  top:50%;
  transform: translate3d(-50%,-50%,0);
  color:rgb(255,255,255);
  text-align: center;
}
.checkbox:checked{
  border: solid 1px #d8d8d8;
  background-color: rgba(232, 39, 70, 1);

}
</style>


