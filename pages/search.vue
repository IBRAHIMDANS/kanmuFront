<template>
  <div>
    <div class="left">
      <CheckboxList
        :all="true"
        title="Location"
        :data="locations"
        @change="changeLocations"
      />
      <CheckboxList
        :all="true"
        title="Jeux"
        :data="games"
        @change="changeGames"
      />
    </div>
    <div class="right">
      <SearchResult :data="results"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      results: [
        {
          teamName: "Gamer Origin",
          teamLikes: "20.2k",
          teamImage: "http://via.placeholder.com/700x500",
          logoImage: "http://via.placeholder.com/150x150",
        },
        {
          teamName: "LDV Esport",
          teamLikes: "4.2k",
          teamImage: "http://via.placeholder.com/700x500",
          logoImage: "http://via.placeholder.com/150x150",
        },
        {
          teamName: "LDLC OL",
          teamLikes: "20.2k",
          teamImage: "http://via.placeholder.com/700x500",
          logoImage: "http://via.placeholder.com/150x150",
        },
      ],
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
      games: [
        {
          id: 'fornite',
          title: 'Fornite',
          checked: false,
        },
        {
          title: 'League of Legends',
          id: 'league-of-legends',
          checked: false,
        },
        {
          title: 'Fifa',
          id: 'fifa',
          checked: false,
        },
        {
          id: 'hearthstone',
          title: 'Hearthstone',
          checked: false,
        },
      ],
    }
  },
  methods: {
    changeLocations: function (data) {
      for (const location of this.locations) {
        if (data.id === location.id) {
          location.checked = !location.checked
        }
      }
    },
    changeGames: function (data) {
      for (const game of this.games) {
        if (data.id === game.id) {
          game.checked = !game.checked
        }
      }
    },
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
  padding: 20px 50px 20px 390px;
  box-sizing: border-box;
}
</style>
