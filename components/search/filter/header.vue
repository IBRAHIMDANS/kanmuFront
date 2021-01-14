<template>
  <header class="search-header">
    <div class="search-container">
      <input :value="search" @keydown="change" type="search" placeholder="Rechercher ..."/>
      <a class="help">Je ne trouve pas ma structure</a>
    </div>
    <div class="favorite">
      <span class="text">Favori: </span>
      <a v-for="team of _teams" :v-key="team.slug" class="item" :href="'/structure/'+team.slug">{{ team.name }}</a>
    </div>
  </header>
</template>

<script lang="ts">
  const SearchHeader = {
    props: {
      search: String,
      teams: Array,
      favorites: Array,
    },
    computed: {
      _teams: function(){
        const result = [];
        // @ts-ignore
        for(const item of this.favorites){
          // @ts-ignore
          for(const team of this.teams){
            if (team.slug === item){
              // @ts-ignore
              result.push(team);
              break;
            }
          }
        }

        return result;
      },
    },
    methods: {
      change: function(evt){
        if (evt.which !== 13){
          return;
        }

        // @ts-ignore
        if (evt.target.value !== this.search.toLowerCase().trim()){
          // @ts-ignore
          this.$emit("update-search",evt.target.value.toLowerCase().trim());
        }
      },
    }
  };

  export default SearchHeader;
</script>
