<template>
  <p :class="{
    'paragraph': true,
    'align-left': this.align === 'left',
    'align-center': this.align === 'center',
    'align-right': this.align === 'right',
    'border-paragraph': this.quote,
  }">
    <slot/>
  </p>
</template>
<script>
const Paragraph = {
  inheritAttrs: false,
  props: {
    align: {
      default: "left",
      type: String
    },
    quote: {
      default: false,
      type: Boolean
    },
  }
}

export default Paragraph
</script>
