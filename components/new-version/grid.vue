<template>
  <div :class="{
    'columns-container': true,
    'full-height': this.fillHeight,
  }"><slot/></div>
</template>
<script>
const Grid = {
  inheritAttrs: false,
  props: {
    fillHeight: {
      default: false,
      type: Boolean
    }
  }
}

export default Grid
</script>
