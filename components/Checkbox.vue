<template>
  <span :class="checkbox_class">
    <input :id="_id" type="checkbox" :checked="checked" @change="change" />
  </span>
</template>

<script>
const Checkbox = {
  props: {
    inputName: String,
    inputId: String,
    checked: Boolean,
  },
  methods: {
    change: function () {
      this.$emit('change', this);
    },
  },
  computed: {
    checkbox_class: function () {
      if (this.checked) {
        return 'checkbox actived'
      }

      return 'checkbox'
    },
    _id: function () {
      if (this.inputId !== undefined) {
        return this.inputId
      }

      return 'checkbox-' + this.inputName
    },
  },
}

export default Checkbox
</script>

<style>
.checkbox {
  height: 15px;
  width: 15px;
  border-radius: 30px;
  border: 2px solid #ffffff;
}
.checkbox:before {
  content: '';
}
.checkbox:before,
.checkbox input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  opacity: 0;
}
.checkbox.actived:before {
  opacity: 1;
}
</style>
