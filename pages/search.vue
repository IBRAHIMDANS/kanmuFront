<template>
  <div>
    <div class="right">
      <SearchHeader :search="search" @update="change_search"/>
      <SearchResult :data="teams"/>
    </div>
    <LeftFilterPanel :games="games" :locations="locations" @change-game="changeGame" @change-location="changeLocation" @update="update"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LeftFilterPanel from '~/components/search/filter/panel'
import SearchHeader from '~/components/search/filter/header'
import SearchResult from '~/components/search/result/SearchResult'
import Teams from "~/static/teams";

export default Vue.extend({
  asyncData(params){
    const games: {id: string,title: string,checked: boolean}[] = [];

    const filter: {
      game: string[],
      location: string[],
      search: string[],
    } = {
      game: [],
      location: [],
      search: [],
    };

    if (typeof params.query.game === "string"){
      filter.game.push(... params.query.game.toLowerCase().split(",").filter(i => i.trim().length > 0).map(i => i.trim()));
    }
    if (typeof params.query.q === "string"){
      filter.search.push(... params.query.q.toLowerCase().split(" ").filter(i => i.length > 0).map(i => i.trim()));
    }

    for(const team of Teams){
      for(const game of team.games){
        if (games.filter(g => g.id === game.slug).length <= 0){
          games.push({
            title: game.name,
            id: game.slug,
            checked: filter.game.includes(game.slug),
          })
        }
      }
    }

    return {
      locations: [
        {
          id: 'ile-de-france',
          title: 'Ile de France',
          checked: false,
        },
        {
          title: "Provence Alpes Côtes d'Azur",
          id: 'provence-alpes-cotes-d-azur',
          checked: false,
        },
        {
          title: 'Occitanie',
          id: 'occitanie',
          checked: false,
        },
        {
          id: 'bretagne',
          title: 'Bretagne',
          checked: false,
        },
      ],
      search: filter.search.join(" "),
      games: games,
      teams: Teams.filter((team) => {
        if (typeof params.query.q === "string"){
          let ok = false;

          for(const item of team.name.toLowerCase().split(" ").filter(i => i.trim().length > 0).map(i => i.trim())){
            if(filter.search.includes(item)){
              ok = true;
              break;
            }
          }

          if (!ok){
            return false;
          }
        }

        if (typeof params.query.game === "string"){
          let ok = false;

          for(const game of team.games){
            if(filter.game.includes(game.slug.toLowerCase().trim())){
              ok = true;
              break;
            }
          }

          if (!ok){
            return false;
          }
        }

        return true;
      })
    };
  },
  components: {
    LeftFilterPanel: LeftFilterPanel,
    SearchResult: SearchResult,
    SearchHeader: SearchHeader
  },
  methods: {
    changeLocation: function (data) {
      for (const location of this.locations) {
        if (data.id === location.id) {
          location.checked = !location.checked
        }
      }
    },
    changeGame: function (data) {
      for (const game of this.games) {
        if (data.id === game.id) {
          game.checked = !game.checked
        }
      }
    },
    change_search: function(search){
      this.search = search;

      this.update();
    },
    update: function () {
      const games = this.games.filter(game => game.checked).map(game => game.id);
      const search = this.search.toLowerCase().trim();
      const url = new URL(window.location);

      url.searchParams.forEach((i: string,key: string) => url.searchParams.delete(key));

      if (games.length > 0){
        url.searchParams.set("game",games.join(","));
      }

      if (search.length > 0){
        url.searchParams.set("q",search);
      }

      if (url !== window.location){
        window.location = url;
      }
    }
  },
})
</script>

<style>
.left {
  background-color: #e82746;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 340px;
  padding: 10px 20px;
  box-sizing: border-box;
  color: #ffffff;
}
.right {
  position: absolute;
  left: 0;
  top: 0;
  height: auto;
  width: 100%;
  padding: 20px 0 20px 340px;
  box-sizing: border-box;
}
</style>
