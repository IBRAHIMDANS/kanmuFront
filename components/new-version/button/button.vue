<template>
  <button :class="{
    button: true,
    'primary-button': this.primary,
    'big': this.big,
  }">
    <slot/>
  </button>
</template>

<script lang="ts">
const Button = {
  inheritAttrs: false,
  props: {
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
