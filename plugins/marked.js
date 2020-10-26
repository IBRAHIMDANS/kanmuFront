import Vue from 'vue'
import  marked from 'marked'

Vue.use({
  install () {
    Vue.marked = marked
    Vue.prototype.$marked = marked
  }
})
