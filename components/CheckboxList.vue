<template>
  <div class="filter-group">
    <span class="filter-group-title">{{ title }}</span>
    <ul class="filter-group-checkout">
      <li v-if="all">
        <Checkbox
          :checked="location_all"
          :input-name="inputAllId"
          :input-id="inputAllId"
          @change="change"
        />
        <label :for="inputAllId">Tout afficher</label>
      </li>
      <li v-for="(check,index) in data" :v-key="check.id" :class="{disable: index >= max && !open}">
        <Checkbox
          :checked="check.checked"
          :input-name="check.id"
          :input-id="check.id"
          @change="change"
        />
        <label :for="check.id">{{ check.title }}</label>
      </li>
    </ul>
    <button class="see-more" v-if="!open" @click="more">Voir plus (+)</button>
    <button class="see-more" v-if="open" @click="less">Voir moins (-)</button>
  </div>
</template>

<script lang="ts">
const CheckboxList = {
  data() {
    return {
      location_all: this.data.filter(item => item.checked).length <= 0,
      open: false,
    }
  },
  props: {
    all: Boolean,
    title: String,
    max: Number,
    data: {
      checked: Boolean,
      id: String,
      title: String,
    },
  },
  methods: {
    more: function(){
      this.open = true;
    },
    less: function(){
      this.open = false;
    },
    change: function (props) {
      let update = false;
      if (props.inputId === this.inputAllId) {
        this.location_all = !this.location_all

        if (this.location_all) {
          for (const check of this.data) {
            if (check.checked) {
              this.$emit('change', check)
              update = true;
            }
          }
        }
      } else {
        this.location_all = false;
        for (const check of this.data) {
          if (check.id === props.inputId) {
            this.$emit('change', check)
            update = true;
          }
        }
      }

      if (update){
        this.$emit("update");
      }
    },
  },
  computed: {
    inputAllId: function () {
      return 'checkbox-' + this.title + '-all'
    },
  },
}

export default CheckboxList
</script>

<style>
.filter-group .filter-group-title {
  display: block;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  color: #ffffff;
  font-weight: bold;
  font-family: 'Helvetica Neue', sans-serif;
  line-height: 37px;
  font-size: 30px;
}
.filter-group {
  display: block;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 20px 0;
}

.filter-group-checkout {
  display: block;
  width: 100%;
  height: auto;
  padding: 0 0 0 20px;
  margin:5px 0;
  list-style: none;
}
.filter-group-checkout li {
  display: block;
  width: 100%;
  height: auto;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  position: relative;
  overflow: hidden;
  max-height:100px;
  transition:max-height 0.3s;
}

.filter-group-checkout li .checkbox {
  position: absolute;
  left: 4px;
  top: 6px;
}

.filter-group-checkout li label {
  width: 100%;
  height: auto;
  padding: 3px 30px;
  margin: 0;
  font-size: 18px;
  font-family: 'Helvetica Neue', sans-serif;
  line-height: 22px;
  display: inline-block;
}

.see-more{
  display:block;
  outline:none;
  background:transparent;
  border:0 none transparent;
  text-align:center;
  cursor:pointer;
  width:100%;
  height:auto;
  color: #fff;
  font-family: "Helvetica Neue", sans-serif;
  font-size:15px;
  padding: 7px;
  box-sizing: border-box;
  line-height: 15px;
  overflow: hidden;
  transition:max-height,padding 0.3s;
}

.filter-group-checkout li.disable,
.disable {
  max-height:0;
  padding: 0;
  visibility: hidden;
}
</style>
