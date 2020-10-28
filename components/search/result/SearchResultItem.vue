<template>
  <div class="result-item">
    <div class="images">
      <img class="team" :src="imageTeam" />
      <img class="logo" :src="imageLogo" />
    </div>
    <div class="informations">
      <h2 class="result-item-title">
        {{ name }}
      </h2>
      <sub>{{ _like }} personnes aiment cette structure</sub>
      <button class="favorite">Favori</button>
    </div>
  </div>
</template>

<script>
const SearchResultItem = {
  props: {
    imageTeam: String,
    imageLogo: String,
    name: String,
    like: Number,
  },
  computed: {
    _like: function(){
      if (this.like < 10){
        return this.like;
      }

      if (this.like < 100){
        return "+ de "+(Math.floor(this.like / 10) * 10);
      }

      if (this.like < 1000){
        return "+ de "+(Math.floor(this.like / 100) * 100);
      }

      return "+ de "+Math.floor(this.like / 1000)+"k";
    }
  }
};

export default SearchResultItem
</script>

<style>
.result-item {
  display: flex;
  width: 100%;
  max-width: 100%;
  margin: 40px 0;
  height: 400px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 3px 6px #00000029;
}

.result-item .images {
  width: 45%;
  height: 100%;
  position: relative;
}

.result-item .images .team {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.result-item .images .logo {
  background: #ffffff;
  position: absolute;
  right: 0;
  transform: translate3d(50%, -50%, 0);
  top: 50%;
  width: 150px;
  height: 150px;
  padding: 15px;
  object-fit: contain;
}

.result-item .informations .result-item-title {
  font-size: 40px;
  line-height: 38px;
  margin: 5px 0;
  padding: 0;
}
.result-item .informations sub {
  font-size: 16px;
  line-height: 16px;
  margin: 5px 0;
  padding: 0;
}
.result-item .informations {
  display: flex;
  width: 100%;
  color: #000000;
  font-family: 'Helvetica Neue', sans-serif;
  text-align: left;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 50px 200px 50px 170px;
  box-sizing: border-box;
  position:relative;
}

.result-item .informations .favorite.active{
  background-image: url("/star-active.png");
  color:#FEC12D;
}

.result-item .informations .favorite{
  width:125px;
  height:50px;
  position:absolute;
  right:40px;
  top:50%;
  transform:translate3D(0,-50%,0);
  outline:none;
  border:0 none transparent;
  border-radius:300px;
  box-shadow: 0 3px 6px #00000029;
  cursor: pointer;
  font-family: "Helvetica Neue", sans-serif;
  font-weight: bold;
  color:#E3E9ED;
  font-size:15px;
  line-height:15px;
  box-sizing: border-box;
  padding:0 0 0 50px;
  background-image: url("/star-disable.png");
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 20px auto;
  background-position: left 17px top 14px;
  text-align: left;
}
</style>
