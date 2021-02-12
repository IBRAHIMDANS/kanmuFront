<template>
  <section :class="{
    'section': true,
    'align-left': this.horizontalAlign === 'left',
    'align-center': this.horizontalAlign === 'center',
    'align-right': this.horizontalAlign === 'right',
    'bg-black': this.color === 'black',
    'bg-white': this.color === 'white',
    'bg-grey': this.color === 'grey',
    'padding-bottom-50': Number(this.paddingBottom) === 50,
    'padding-top-50': Number(this.paddingTop) === 50,
    'screen-size': this.screen,
    'triangle-bottom': this.triangleBottom,
    'triangle-top': this.triangleTop === 'normal',
    'inverted-triangle-top': this.triangleTop === 'inverted',
    'contact-background': this.background === 'contact',
  }">
    <slot/>
  </section>
</template>
<script>
const Section = {
  inheritAttrs: false,
  props: {
    horizontalAlign: {
      default: "center",
      type: String
    },
    color: {
      default: null,
      type: String
    },
    screen: {
      default: false,
      type: Boolean
    },
    paddingTop: {
      default: 0,
      type: Number
    },
    paddingBottom: {
      default: 0,
      type: Number
    },
    triangleBottom: {
      default: false,
      type: Boolean
    },
    triangleTop: {
      default: "no",
      type: String
    },
  }
}

export default Section
</script>
