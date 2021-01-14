<template>
  <nav class="bg-white" :style="styles">
    <slot/>
  </nav>
</template>
<script>
const Menu = {
  data(){
    return {
      _scroll: 0,
      offset: 0,
      position: 0,
      opacity: 0,
    }
  },
  computed: {
    styles(){
      return {
        transform: 'translate3d(0,'+this.position * -1+'px,0)',
        transition: this.position <= 0 ? '0.4s 0s transform' : 'none',
        boxShadow: '0 0 6px rgba(0,0,0,'+Math.ceil(this.opacity * 110)+')',
        backgroundColor: 'rgba(255,255,255,'+this.opacity+')',
        color: 'rgb('+(1 - this.opacity) * 255+','+(1 - this.opacity) * 255+','+(1 - this.opacity) * 255+')'
      }
    },
  },
  methods: {
    updateScroll(){
      if ((this._scroll - window.scrollY) > 0 || window.scrollY <= 600){
        this.offset = window.scrollY;
      }

      this.position = window.scrollY - this.offset;
      this.opacity = Math.min(window.scrollY / 400,1);

      this._scroll = window.scrollY;
    }
  },
  mounted: function() {
    //this.scroll = window.scrollY;
    const update = () => {
      this.updateScroll();

      window.requestAnimationFrame(update)
    };
    update();
  }
}

export default Menu
</script>
