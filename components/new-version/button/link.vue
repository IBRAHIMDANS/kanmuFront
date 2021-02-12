<template>
  <a :class="{
    link: true,
    'disabled': this.disabled,
    'primary': this.primary,
  }">
    <slot/>
  </a>
</template>

<script lang="ts">
const Link = {
  inheritAttrs: false,
  props: {
    primary: {
      default: false,
      type: Boolean
    },
    disabled: {
      default: false,
      type: Boolean
    },
  }
}

export default Link
</script>
