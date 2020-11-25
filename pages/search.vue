<template>
  <div>
    <div class="right-wrapper">
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
    const locations: {id: string,title: string,checked: boolean}[] = [];

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
      filter.game.push(... params.query.game.toLowerCase().split(",").filter(i => i.trim().length > 0).map(i => i.trim().toLowerCase()));
    }
    if (typeof params.query.location === "string"){
      filter.location.push(... params.query.location.toLowerCase().split(",").filter(i => i.trim().length > 0).map(i => i.trim().toLowerCase()));
    }
    if (typeof params.query.q === "string"){
      filter.search.push(... params.query.q.toLowerCase().split(" ").filter(i => i.length > 0).map(i => i.trim()));
    }

    for(const team of Teams){
      for(const game of team.games){
        if (games.filter(g => g.id === game.slug.trim().toLowerCase()).length <= 0){
          games.push({
            title: game.name,
            id: game.slug.trim().toLowerCase(),
            checked: filter.game.includes(game.slug.trim().toLowerCase()),
          })
        }
      }

      if (typeof team.continent !== "undefined" && locations.filter(g => g.id === team.continent!.slug.trim().toLowerCase()).length <= 0){
        locations.push({
          title: team.continent.name,
          id: team.continent.slug.trim().toLowerCase(),
          checked: filter.location.includes(team.continent.slug.trim().toLowerCase()),
        })
      }
      if (typeof team.country !== "undefined" && locations.filter(g => g.id === team.country!.slug.trim().toLowerCase()).length <= 0){
        locations.push({
          title: team.country.name,
          id: team.country.slug.trim().toLowerCase(),
          checked: filter.location.includes(team.country.slug.trim().toLowerCase()),
        })
      }
      if (typeof team.state !== "undefined" && locations.filter(g => g.id === team.state!.slug.trim().toLowerCase()).length <= 0){
        locations.push({
          title: team.state.name,
          id: team.state.slug.trim().toLowerCase(),
          checked: filter.location.includes(team.state.slug.trim().toLowerCase()),
        })
      }
      if (typeof team.region !== "undefined" && locations.filter(g => g.id === team.region!.slug.trim().toLowerCase()).length <= 0){
        locations.push({
          title: team.region.name,
          id: team.region.slug.trim().toLowerCase(),
          checked: filter.location.includes(team.region.slug.trim().toLowerCase()),
        })
      }
      if (typeof team.department !== "undefined" && locations.filter(g => g.id === team.department!.slug.trim().toLowerCase()).length <= 0){
        locations.push({
          title: team.department.name,
          id: team.department.slug.trim().toLowerCase(),
          checked: filter.location.includes(team.department.slug.trim().toLowerCase()),
        })
      }
    }

    return {
      locations: locations,
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

        if (typeof params.query.location === "string"){
          let ok = false;

          if (typeof team.department !== "undefined" && filter.location.includes(team.department!.slug.trim().toLowerCase())){
            ok = true;
          }
          if (typeof team.continent !== "undefined" && filter.location.includes(team.continent!.slug.trim().toLowerCase())){
            ok = true;
          }
          if (typeof team.state !== "undefined" && filter.location.includes(team.state!.slug.trim().toLowerCase())){
            ok = true;
          }
          if (typeof team.country !== "undefined" && filter.location.includes(team.country!.slug.trim().toLowerCase())){
            ok = true;
          }
          if (typeof team.region !== "undefined" && filter.location.includes(team.region!.slug.trim().toLowerCase())){
            ok = true;
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
    LeftFilterPanel,
    SearchResult,
    SearchHeader
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
      const locations = this.locations.filter(location => location.checked).map(location => location.id);

      // @ts-ignore
      const search = this.search.toLowerCase().trim();

      // @ts-ignore
      const url = new URL(window.location);

      url.searchParams.forEach((i: string,key: string) => url.searchParams.delete(key));

      if (games.length > 0){
        url.searchParams.set("game",games.join(","));
      }
      if (locations.length > 0){
        url.searchParams.set("location",locations.join(","));
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
  .right-wrapper {
    position: absolute;
    right: 0;
    top: 0;
    height: auto;
    width: calc(100% - 340px);
    padding: 20px 0;
    box-sizing: border-box;
  }
</style>
