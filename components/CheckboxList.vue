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
      <li v-for="check of data" :v-key="check.id">
        <Checkbox
          :checked="check.checked"
          :input-name="check.id"
          :input-id="check.id"
          @change="change"
        />
        <label :for="check.id">{{ check.title }}</label>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
const CheckboxList = {
  data() {
    return {
      location_all: false,
    }
  },
  props: {
    all: Boolean,
    title: String,
    data: {
      checked: Boolean,
      id: String,
      title: String,
    },
  },
  methods: {
    change: function (props) {
      if (props.inputId === this.inputAllId) {
        this.location_all = !this.location_all

        if (this.location_all) {
          for (const check of this.data) {
            if (check.checked) {
              this.$emit('change', check)
            }
          }
        }
      } else {
        this.location_all = false;
        for (const check of this.data) {
          if (check.id === props.inputId) {
            this.$emit('change', check)
          }
        }
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
  margin: 0;
}

.filter-group-checkout {
  display: block;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 15px 0;
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
</style>
