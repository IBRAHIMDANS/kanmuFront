<template>
  <h2 :class="{
    title: true,
    'small-title': this.type.toLowerCase() === 'small',
    'big-title': this.type === 'big',
    'align-left': this.align === 'left',
    'align-center': this.align === 'center',
    'align-right': this.align === 'right',
  }"><slot/></h2>
</template>
<script>
const Title = {
  inheritAttrs: false,
  props: {
    type: {
      default: "normal",
      type: String
    },
    align: {
      default: "left",
      type: String
    },
  }
}

export default Title
</script>
