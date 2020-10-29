<template>
  <div>
    <div class="right">
      <SearchHeader :favorites="favorites" :teams="teams" :search="search" @update="change_search"/>
      <SearchResult @favorite="favorite" :favorites="favorites" :data="teams"/>
    </div>
    <LeftFilterPanel :games="games" :locations="locations" @change-game="changeGame" @change-location="changeLocation" @update="update"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import LeftFilterPanel from '~/components/search/filter/panel'
// @ts-ignore
import SearchHeader from '~/components/search/filter/header'
// @ts-ignore
import SearchResult from '~/components/search/result/SearchResult'
import Teams from "~/static/teams";

export default Vue.extend({
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
      favorites: [],
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
    favorite: function (slug) {
      const _slug = slug.trim().toLowerCase();

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

    changeLocation: function (data) {
      // @ts-ignore
      for (const location of this.locations) {
        if (data.id === location.id) {
          location.checked = !location.checked
        }
      }
    },
    changeGame: function (data) {
      // @ts-ignore
      for (const game of this.games) {
        if (data.id === game.id) {
          game.checked = !game.checked
        }
      }
    },
    change_search: function(search){
      // @ts-ignore
      this.search = search;

      this.update();
    },
    update: function () {
      // @ts-ignore
      const games = this.games.filter(game => game.checked).map(game => game.id);

      // @ts-ignore
      const search = this.search.toLowerCase().trim();

      // @ts-ignore
      const url = new URL(window.location);

      url.searchParams.forEach((i: string,key: string) => url.searchParams.delete(key));

      if (games.length > 0){
        url.searchParams.set("game",games.join(","));
      }

      if (search.length > 0){
        url.searchParams.set("q",search);
      }

      // @ts-ignore
      window.location = url;
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
