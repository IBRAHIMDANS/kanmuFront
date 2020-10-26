<template>
  <div>
    <Menu></Menu>
    <div class="container">
      <Sidebar />
      <div class="app-content">
        <md-card md-with-hover>
          <md-card-media class="app-teams">
            <img class="pic-teams" src="../assets/team/6.png">
            <img class="logo-teams" src="../assets/team/1.png">
          </md-card-media>
          <div class="app-title">
            <h3 class="app-name"> SOLARIS </h3>
            <md-divider class="app-divider" />
          </div>
        </md-card>
<div>
  <h1>A propos</h1>

  <div v-html="compiledMarkdown">
    # hello
    ## Mamanie

  </div>
</div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Sidebar from '~/components/Sidebar.vue';

export default Vue.extend({
  components: { Sidebar },
  data: {
    data : '# apap'
  },
  computed: {
    compiledMarkdown: function() {
      // return marked(this.data, { sanitize: true });
    }
  }
});
</script>

<style>
body {
  width: 100%;
  height: auto;
  min-height: 100%;
  padding: 0;
  margin: 0;
  position: relative;
}

html {
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}

.pic-teams {
  width: 37%;
}

.logo-teams {
  height: 100px;
  background-color: white;

}

.app-teams {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app-name {
  text-align: center;
  width: auto;
  height: auto;
  line-height: 55px;
  font-size: 41px;
  font-weight: bold;
  font-family: "Helvetica Neue", sans-serif;
}

.app-divider {
  width: 100px;
  height: 4px;
  background-color: #E82746;
  border: none;
}
.app-title {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
