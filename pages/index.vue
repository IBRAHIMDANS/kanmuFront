<template>
  <div>
    <Title></Title>
    <WeeklyTeam :image="team.image.team" :players="team.player" :created_at="team.created_at" :name="team.name" :description="team.description"></WeeklyTeam>
    <Propals title="Voir d’autres équipes" :data="_teams"></Propals>
    <Propals title="Nos articles sur l'esport" :data="_articles"></Propals>
    <Footer></Footer>
    <Menu></Menu>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import WeeklyTeam from '~/components/home/WeeklyTeam.vue'
  import Propals from '~/components/home/Propals.vue'
  import Footer from '~/components/util/Footer.vue'
  import Menu from '~/components/util/Menu.vue'
  import Teams from "~/static/teams";
  import Articles from "~/static/articles";

  export default Vue.extend({
    asyncData() {
      return Promise.resolve({
         teams: Teams,
         articles: Articles,
         team: Teams[Math.floor(Math.random() * Teams.length)]
       })
    },
    components: {
      WeeklyTeam,
      Propals,
      Footer,
      Menu,
    },
    computed: {
      _articles: function(){
        return this.articles.slice(0,2).map((article) => {
          return {
            image: article.image,
            title: article.title,
          }
        });
      },
      _teams: function(){
        return this.teams.filter((team) => {
          return team.slug !== this.team.slug;
        }).slice(0,2).map((team) => {
          return {
            image: team.image.team,
            title: team.name,
          }
        });
      }
    }
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
