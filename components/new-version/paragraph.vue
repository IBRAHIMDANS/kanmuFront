<template>
  <p :class="{
    'paragraph': true,
    'align-left': this.align === 'left',
    'align-center': this.align === 'center',
    'align-right': this.align === 'right',
    'font-orbitron': this.font === 'orbitron',
    'font-nato': this.font === 'nato',
    'margin-top-28': Number(this.marginTop) === 28,
    'margin-bottom-28': Number(this.marginBottom) === 28,
    'font-size-40': Number(this.fontSize) === 40,
    'font-size-28': Number(this.fontSize) === 28,
    'font-size-18': Number(this.fontSize) === 18,
    'font-size-16': Number(this.fontSize) === 16,
    'line-height-50': Number(this.lineHeight) === 50,
    'line-height-35': Number(this.lineHeight) === 35,
    'line-height-26': Number(this.lineHeight) === 26,
    'quote': this.quote
  }">
    <slot/>
  </p>
</template>
<script>
const Paragraph = {
  inheritAttrs: false,
  props: {
    quote: {
      default: false,
      type: Boolean
    },
    font: {
      default: "nato",
      type: String
    },
    align: {
      default: "left",
      type: String
    },
    fontSize: {
      default: 26,
      type: Number
    },
    lineHeight: {
      default: 16,
      type: Number
    },
    marginTop: {
      default: 28,
      type: Number
    },
    marginBottom: {
      default: 28,
      type: Number
    }
  }
}

export default Paragraph
</script>
