<template>
  <div>
    <Title></Title>
    <WeeklyTeam :href="'/structure/'+team.slug" :image="team.image.team" :players="team.player" :created_at="team.created_at" :name="team.name" :description="team.description"></WeeklyTeam>
    <Propals href="/search" more_text="Voir d’autres équipes" :data="_teams"></Propals>
    <Propals href="/" more_text="Nos articles sur l'esport" :data="_articles"></Propals>
    <Footer></Footer>
    <Menu>
      <Button href="/login">Connexion</Button>
      <Button filled href="/register">Inscription</Button>
    </Menu>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  // @ts-ignore
  import WeeklyTeam from '~/components/home/WeeklyTeam.vue'
  // @ts-ignore
  import Propals from '~/components/home/Propals.vue'
  // @ts-ignore
  import Footer from '~/components/util/Footer.vue'
  // @ts-ignore
  import Menu from '~/components/util/Menu.vue'
  import Button from '~/components/util/button.vue'
  import Teams from "~/static/teams";
  import Articles from "~/static/articles";

  type Data = {
    articles: typeof Articles,
    teams: typeof Teams,
    team: any
  }

  export default Vue.extend<Data>({
    // @ts-ignore
    asyncData(): Promise<Data> {
      return Promise.resolve({
         teams: Teams,
         articles: Articles,
         team: Teams[Math.floor(Math.random() * Teams.length)]
       })
    },
    components: {
      WeeklyTeam,
      Button,
      Propals,
      Footer,
      Menu,
    },
    computed: {
      _articles: function(): {image: string,title: string}[] {
        // @ts-ignore
        return this.articles.slice(0,2).map((article) => {
          return {
            image: article.image,
            title: article.title,
          }
        });
      },
      _teams: function(): {image: string,title: string}[] {
        // @ts-ignore
        return this.teams.filter((team) => {
          // @ts-ignore
          return team.slug !== this.team.slug;
        }).slice(0,2).map((team) => {
          return {
            image: team.image.team,
            title: team.name,
            href: "/structure/"+team.slug,
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
