<template>
  <div :class="css_class">
    <slot/>
  </div>
</template>
<script>
const Column = {
  inheritAttrs: false,
  props: {
    width: {
      default: 1,
      type: Number
    },
    verticalAlign: {
      type: String,
      default: "default"
    },
    horizontalAlign: {
      type: String,
      default: "default"
    },
  },
  computed: {
    css_class: function() {
      const result = [
        "column-"+this.width
      ];

      switch(this.verticalAlign){
        case 'top':
          result.push("vertical-top");
          break;
        case 'center':
          result.push("vertical-center");
          break;
        case 'bottom':
          result.push("vertical-bottom");
          break;
      }

      switch(this.horizontalAlign){
        case 'left':
          result.push("horizontal-left");
          break;
        case 'center':
          result.push("horizontal-center");
          break;
        case 'right':
          result.push("horizontal-right");
          break;
      }

      return result.join(" ")
    }
  }
}

export default Column
</script>
