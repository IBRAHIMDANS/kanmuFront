<template>
  <a :class="{
    link: true,
    'primary-link': this.primary,
  }" class="section left-align buttons-margin">
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
  }
}

export default Link
</script>
