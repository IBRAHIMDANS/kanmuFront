<template>
  <button :class="{
    button: true,
    'fill-width': this.fillWidth,
    'primary': this.primary,
    'big': this.big,
  }">
    <slot/>
  </button>
</template>

<script lang="ts">
const Button = {
  inheritAttrs: false,
  props: {
    fillWidth: {
      default: false,
      type: Boolean
    },
    primary: {
      default: false,
      type: Boolean
    },
    big: {
      default: false,
      type: Boolean
    },
  }
}

export default Button
</script>
