<template>
  <section :class="{
    'section': true,
    'bg-black': this.color === 'black',
    'bg-white': this.color === 'white',
    'bg-grey': this.color === 'grey',
    'padding-top': this.paddingTop,
    'padding-bottom': this.paddingBottom,
    'screen-size': this.screen,
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
  }
}

export default Section
</script>
