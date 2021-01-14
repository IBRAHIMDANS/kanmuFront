<template>
  <div :class="{
    section: true,
    'buttons-margin': true,
    'align-left': this.align === 'left',
    'align-center': this.align === 'center',
    'align-right': this.align === 'right',
  }" class="section left-align buttons-margin">
    <slot/>
  </div>
</template>

<script lang="ts">
const ButtonContainer = {
  inheritAttrs: false,
  props: {
    align: {
      default: "left",
      type: String
    },
  }
}

export default ButtonContainer
</script>
