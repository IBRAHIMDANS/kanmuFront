<template>
  <h2 :class="{
    title: true,
    'align-left': this.align === 'left',
    'align-center': this.align === 'center',
    'align-right': this.align === 'right',
    'font-orbitron': this.font === 'orbitron',
    'font-nato': this.font === 'nato',
    'font-size-40': Number(this.fontSize) === 40,
    'font-size-28': Number(this.fontSize) === 28,
    'font-size-18': Number(this.fontSize) === 18,
    'font-size-16': Number(this.fontSize) === 16,
    'line-height-50': Number(this.lineHeight) === 50,
    'line-height-35': Number(this.lineHeight) === 35,
    'line-height-26': Number(this.lineHeight) === 26,
  }"><slot/></h2>
</template>
<script>
const Title = {
  inheritAttrs: false,
  props: {
    font: {
      default: "orbitron",
      type: String
    },
    align: {
      default: "left",
      type: String
    },
    fontSize: {
      default: 40,
      type: Number
    },
    lineHeight: {
      default: 50,
      type: Number
    }
  }
}

export default Title
</script>
