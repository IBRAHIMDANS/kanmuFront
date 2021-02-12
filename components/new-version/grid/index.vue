<template>
  <div :class="{
    'bg-black': this.color === 'black',
    'bg-white': this.color === 'white',
    'bg-grey': this.color === 'grey',

    'triangle-bottom': this.triangleBottom,
    'triangle-top': this.triangleTop === 'normal',
    'inverted-triangle-top': this.triangleTop === 'inverted',

    'screen-size': this.screenSize,
    'one-line': this.oneLine,
    'section': this.section,
    'grid': true,
    'fill-height': this.fillHeight,
    'vertical-start': this.verticalAlign === 'start',
    'vertical-center': this.verticalAlign === 'center',
    'vertical-end': this.verticalAlign === 'end',
    'horizontal-start': this.horizontalAlign === 'start',
    'horizontal-center': this.horizontalAlign === 'center',
    'horizontal-end': this.horizontalAlign === 'end',
    'horizontal-gap-16': Number(this.horizontalGap) === 16,
    'horizontal-gap-50': Number(this.horizontalGap) === 50,
  }"><slot/></div>
</template>
<script>
const Grid = {
  inheritAttrs: false,
  props: {
    triangleBottom: {
      default: false,
      type: Boolean
    },
    triangleTop: {
      default: "no",
      type: String
    },
    screenSize: {
      default: false,
      type: Boolean
    },
    oneLine: {
      default: false,
      type: Boolean
    },
    section: {
      default: false,
      type: Boolean
    },
    horizontalGap: {
      default: 16,
      type: Number
    },
    fillHeight: {
      default: false,
      type: Boolean
    },
    verticalAlign: {
      type: String,
      default: "start"
    },
    horizontalAlign: {
      type: String,
      default: "left"
    },
    color: {
      default: null,
      type: String
    }
  }
}

export default Grid
</script>
