<template>
  <div>
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

<style>
  .image-container{
    width:100%;
    height:600px;
    display:block;
    padding:70px 15px 15px 15px;
    position: relative;
    text-align: center;
  }
  .image-container .team-image{
    width:70%;
    display:inline-block;
    height:100%;
    object-fit: contain;
    object-position: bottom;
  }
  .image-container .logo{
    width:170px;
    height:170px;
    position:absolute;
    left:50%;
    bottom:30px;
    transform: translate3d(-50%,0,0);
    background-color:#fff;
    padding:3px;
    object-fit: contain;
  }

  .block{
    margin:25px;
    padding:15px 25px;
    box-sizing: border-box;
    box-shadow: 0 3px 6px #00000029;
  }
  .block.padding-top{
    padding-top:360px;
    margin-top:-300px;
  }

  .block-title{
    width:100%;
    height:auto;
    margin:15px 0 0 0;
    line-height:30px;
    font-size:30px;
    font-family: "Helvetica Neue", sans-serif;
    font-weight: bold;
  }

  .team-description{
    line-height:19px;
    font-size:17px;
    margin:15px 0 0 0;
    padding: 0;
    font-family: "Helvetica Neue", sans-serif;
    font-weight: normal;
    white-space: break-spaces;
  }

  .block-sub{
    display:block;
    width:100%;
    height:auto;
    padding:0;
    text-align: left;
    margin:10px 0 0 0;
    line-height:20px;
    font-size:20px;
    font-family: "Helvetica Neue", sans-serif;
    font-weight: lighter;
    font-style: italic;

  }
  .team-title-container{
    display:block;
    width:100%;
    height:auto;
    padding:0;
    margin:0;
    text-align: center;
  }

  .team-title-container .team-title{
    line-height:40px;
    font-size:40px;
    display:inline-block;
    height:auto;
    padding:0;
    margin:0;
    text-align: center;
    width:auto;
    position:relative;
  }
  .team-title:after{
    content: "";
    position: absolute;
    left:-5%;
    bottom:-12px;
    width:110%;
    height:5px;
    background-color: #E82746;
    display:block;
  }

  .image-list{
    width:100%;
    height:auto;
    padding:0;
    margin:20px 0;
    display:block;
    list-style: none;
    text-align: center;
  }
  .image-list li,
  .image-list li a{
    display:inline-block;
    margin:0;
    padding:0;
    width:auto;
    height:auto;
    vertical-align: center;
  }
  .image-list li img{
    width:auto;
    height:70px;
    max-width:100px;
    object-fit: contain;
  }


  .games{
    width:100%;
    max-width:700px;
    height:auto;
    padding:0;
    margin:20px 0;
    display:flex;
    flex-wrap: wrap;
  }
  .games li{
    display:inline-block;
    height:auto;
    width:50%;
    margin:0;
    padding:0;
  }
  .games li a{
    line-height:20px;
    font-size:20px;
    padding:5px 17px;
    box-sizing: border-box;
    width:auto;
    max-width:100%;
    margin:3px;
    display: inline-block;
    color:#000;
    text-decoration: none;
  }
  .games li a:before{
    content: "";
    width:7px;
    height:7px;
    display: inline-block;
    background-color: #000000;
    margin:0 15px 3px 0;
    border-radius: 300px;
  }


  .left-wrapper {
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
  .right-wrapper {
    position: absolute;
    right: 0;
    top: 0;
    height: auto;
    width: calc(100% - 340px);
    padding: 20px 0;
    box-sizing: border-box;
  }


  .project-title{
    width:100%;
    height:auto;
    margin:30px 0 20px 0;
    padding:10px 7px 10px 7px;
    line-height:50px;
    font-size:50px;
    text-align:center;
    position: relative;
    color: #FFFFFF;
    text-decoration: none;
    display:inline-block;
    cursor: pointer;
    font-weight: bold;
    font-family: "Helvetica Neue", sans-serif;
  }
  .project-title:before{
    position:absolute;
    left:15%;
    background: #FFFFFF;
    bottom:0;
    height:2px;
    width:70%;
    content: "";
  }


  .button-container{
    width:100%;
    height:auto;
    display:block;
    text-align: center;
    margin: 14px 0;
  }

  .btn{
    width:125px;
    height:50px;
    outline:none;
    border-radius:300px;
    box-shadow: 0 3px 6px #00000029;
    cursor: pointer;
    font-family: "Helvetica Neue", sans-serif;
    font-weight: bold;
    font-size:15px;
    line-height:15px;
    color:#E82746;
    box-sizing: border-box;
    padding:0 0 0 50px;
    background-repeat: no-repeat;
    background-size: 20px auto;
    background-position: left 17px top 14px;
    text-align: left;
    display:inline-block;
    background-color:#fff;
    border:0 none transparent;
  }


  .favorite-btn.active{
    background-image: url("/star-active.png");
    color:#FEC12D;
  }
  .favorite-btn{
    color:#E3E9ED;
    background-image: url("/star-disable.png");
  }
  .back{
    background-image: url("/arrow-left.svg");
  }
</style>
