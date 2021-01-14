<template>
  <div class="older">
    <div class="left-wrapper">
      <a href="/" class="project-title">Kanmu</a>

      <div class="button-container">
        <button class="btn back" @click="back">Retour</button>
      </div>
      <div class="button-container">
        <button :class="{'favorite-btn': true,btn: true,active: isFavoriteActive}" @click="favorite">Favori</button>
      </div>
    </div>
    <div class="right-wrapper">
      <header class="image-container">
        <img :src="team.image.team" class="team-image"/>
        <img :src="team.image.logo" class="logo"/>
      </header>
      <div class="team-title-container">
        <h1 class="team-title">{{team.name}}</h1>
      </div>
      <div class="block padding-top">
        <h2 class="block-title">A propos</h2>
        <p class="team-description">{{team.description}}</p>
      </div>
      <div :v-if="team.games.length > 0" class="block">
        <h2 class="block-title">Scène compétitive</h2>
        <sub class="block-sub">L’équipe {{team.name}} est présente sous ces différents jeux vidéos e-sport :</sub>
        <ul class="games">
          <li v-for="game of team.games" :v-key="game.slug">
            <a :href="'/search?game='+game.slug">{{ game.name }}</a>
          </li>
        </ul>
      </div>
      <div v-if="team.sponsors.length" class="block">
        <h2 class="block-title">Sponsorsing</h2>
        <ul class="image-list">
          <li v-for="sponsor of team.sponsors" :v-key="sponsor.slug">
            <img :src="sponsor.image"/>
          </li>
        </ul>
      </div>
      <div v-if="false" class="block">
        <h2 class="block-title">Vous aimez cette structure ?</h2>
        <sub class="block-sub">N’hésitez pas à checker leurs réseaux sociaux !</sub>
        <ul class="image-list">

        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Teams from "~/static/teams";

  export default Vue.extend({
    asyncData(params) {
      if (typeof params.params.slug !== "string"){
        return;
      }

      const slug = params.params.slug.trim().toLowerCase();

      for(const team of Teams){
        if (team.slug.trim().toLowerCase() === slug){
          return {
            team: team,
            favorites: [],
          }
        }
      }

      return params.error({ statusCode: 404, message: 'Page not found' });
    },
    beforeMount(): void {
      const favorites_json = window.localStorage.getItem("favorites");
      if (typeof favorites_json === "string"){
        try{
          const favorites_data = JSON.parse(favorites_json);
          const data = Array.isArray(favorites_data) ? favorites_data : [favorites_data];

          // @ts-ignore
          this.favorites.push(... data.filter(item => typeof item === "string" && item.toLowerCase().trim().length > 0).map(item => item.toLowerCase().trim()));
        }catch (e) {

        }
      }

      // @ts-ignore
      this.favorites = this.favorites.filter((value, index, self) => {
        return self.indexOf(value) === index;
      });

      // @ts-ignore
      window.localStorage.setItem("favorites",JSON.stringify(this.favorites));
    },
    methods: {
      favorite: function () {
        // @ts-ignore
        const _slug = this.team.slug.trim().toLowerCase();

        // @ts-ignore
        const index = this.favorites.indexOf(_slug);
        if (index < 0){
          // @ts-ignore
          this.favorites.push(_slug);
        }else{
          // @ts-ignore
          this.favorites.splice(index,1);
        }

        // @ts-ignore
        this.favorites = this.favorites.filter((value, index, self) => {
          return self.indexOf(value) === index;
        });

        // @ts-ignore
        window.localStorage.setItem("favorites",JSON.stringify(this.favorites));
      },
      back: function(){
        this.$router.back();
      }
    },
    computed: {
      isFavoriteActive: function(){
        // @ts-ignore
        return this.favorites.includes(this.team.slug);
      },
    }
  });
</script>
