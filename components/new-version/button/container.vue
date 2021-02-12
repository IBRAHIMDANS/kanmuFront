<template>
  <div :class="{
    section: true,
    'bg-black': this.color === 'black',
    'bg-white': this.color === 'white',
    'bg-grey': this.color === 'grey',
    'big-margin': this.margin === 'big',
    'lower-margin': this.margin === 'lower',
    'buttons-container': true,
    'align-left': this.align === 'left',
    'align-center': this.align === 'center',
    'align-right': this.align === 'right',
  }">
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
    color: {
      default: null,
      type: String
    },
    margin: {
      default: "normal",
      type: String
    }
  }
}

export default ButtonContainer
</script>
