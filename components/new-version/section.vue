<template>
  <section :class="{
    'section': true,
    'bg-black': this.color === 'black',
    'bg-white': this.color === 'white',
    'bg-grey': this.color === 'grey',
    'padding-top': this.paddingTop && !this.bigPaddingTop,
    'padding-bottom': this.paddingBottom && !this.bigPaddingBottom,
    'big-padding-top': this.bigPaddingTop,
    'big-padding-bottom': this.bigPaddingBottom,
    'screen-size': this.screen,
    'triangle-bottom': this.triangleBottom,
    'triangle-top': this.triangleTop === 'normal',
    'inverted-triangle-top': this.triangleTop === 'inverted',
  }">
    <slot/>
  </section>
</template>
<script>
const Section = {
  inheritAttrs: false,
  props: {
    color: {
      default: null,
      type: String
    },
    screen: {
      default: false,
      type: Boolean
    },
    paddingTop: {
      default: false,
      type: Boolean
    },
    paddingBottom: {
      default: false,
      type: Boolean
    },
    triangleBottom: {
      default: false,
      type: Boolean
    },
    triangleTop: {
      default: "no",
      type: String
    },
    bigPaddingTop: {
      default: false,
      type: Boolean
    },
    bigPaddingBottom: {
      default: false,
      type: Boolean
    },
  }
}

export default Section
</script>
