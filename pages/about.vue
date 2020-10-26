<template>
  <div>
    <Menu></Menu>
    <Sidebar/>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Sidebar from '~/components/Sidebar.vue';

  export default Vue.extend({
    components: { Sidebar }
  })
</script>

<style>
body{
  width:100%;
  height:auto;
  min-height:100%;
  padding: 0;
  margin: 0;
  position: relative;
}
html{
  width:100%;
  height:100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
