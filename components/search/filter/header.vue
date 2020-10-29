<template>
  <header class="search-header">
    <div class="search-container">
      <input :value="search" @keydown="change" type="search" placeholder="Rechercher ..."/>
      <a class="help">Je ne trouve pas ma structure</a>
    </div>
    <div class="favorite">
      <span class="text">Favori: </span>
      <a v-for="team of _teams" :v-key="team.slug" class="item">{{ team.name }}</a>
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

<style>
  .search-header {
    display:block;
    width:100%;
    height:auto;
    padding:20px;
    box-sizing:border-box;
  }
  .search-container {
    display:flex;
    width:100%;
    height:auto;
    box-sizing:border-box;
    justify-content:center;
    align-content:center;
    align-items:center;
  }

  .search-container .help{
    width:auto;
    height:auto;
    font-size:12px;
    line-height:12px;
    white-space:nowrap;
    padding:17px;
    box-sizing:border-box;
    border-radius:300px;
    outline:none;
    border:0 none transparent;
    box-shadow: 0 3px 6px #00000029;
    color: #e82746;
    margin: 0 0 0 60px;
    font-weight: bold;
    font-family: "Helvetica Neue",sans-serif;
  }

  .search-header input{
    width:100%;
    height:auto;
    font-size:19px;
    line-height:19px;
    padding:12px 12px 12px 50px;
    box-sizing:border-box;
    border-radius:300px;
    outline:none;
    border:0 none transparent;
    box-shadow: 0 3px 6px #00000029;
    font-weight: normal;
    font-family: "Helvetica Neue",sans-serif;
    color: #e82746;
  }

  .favorite{
    display:block;
    width:100%;
    height:auto;
    padding:7px 14px;
    box-sizing:border-box;
  }
  .favorite .item{
    font-weight: bold;
    font-family: "Helvetica Neue",sans-serif;
    font-size:14px;
    line-height:14px;
    padding:10px;
    width:auto;
    height:auto;
    margin:3px;
    display:inline-block;
    vertical-align:middle;
    color:rgba(0,0,0,0.7);
    box-shadow: 0 3px 6px #00000029;
    border-radius:300px;
  }
  .favorite .text{
    font-size:14px;
    line-height:14px;
    font-weight: bold;
    font-family: "Helvetica Neue",sans-serif;
    width:auto;
    height:auto;
    margin:3px;
    display:inline-block;
    vertical-align:middle;
  }
</style>
