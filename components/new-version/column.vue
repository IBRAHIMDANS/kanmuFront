<template>
  <div :class="css_class">
    <div v-if="verticalAlign" class="vertical-center">
      <slot/>
    </div>
    <slot v-if="!verticalAlign" />
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
      default: false,
      type: Boolean
    },
    paddingRight: {
      default: false,
      type: Boolean
    },
    paddingLeft: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    css_class: function() {
      const result = [
        "column-"+this.width
      ];

      if (this.verticalAlign){
        result.push("vertical-center-container");
      }
      if (this.paddingRight){
        result.push("padding-right");
      }
      if (this.paddingLeft){
        result.push("padding-left");
      }

      return result.join(" ")
    }
  }
}

export default Column
</script>
