<template>
  <div class="split">
    <div class="left">
      <img :src="image">
    </div>
    <div class="right">
      <h2>{{ name }}</h2>
      <p class="description">{{description}}</p>

      <ul class="statistiques">
        <li class="hourglass-icon">{{ date }}</li>
        <li v-if="typeof location === 'string'" class="pin-icon">{{ location }}</li>
        <li class="user-icon">{{ nbr_players }}</li>
      </ul>

      <div class="button-container">
        <a class="button">En savoir plus</a>
      </div>
    </div>
  </div>

</template>

<script>
  const WeeklyTeam = {
    props: {
      image: String,
      name: String,
      location: String|undefined,
      description: String,
      players: Number,
      created_at: Date,
    },
    computed: {
      date: function(){
        const diff = (Date.now() - this.created_at.getTime()) / 1000;

        console.log(Date.now(),this.created_at.getTime(),diff);

        if (diff > 31557600){
          return Math.floor(diff / 31557600)+" ans"
        }

        if (diff > 2678400){
          return Math.floor(diff / 2678400)+" mois"
        }

        if (diff > 604800){
          return Math.floor(diff / 604800)+" semaines"
        }

        if (diff > 86400){
          return Math.floor(diff / 86400)+" heures"
        }

        if (diff > 3600){
          return Math.floor(diff / 3600)+" heures"
        }

        if (diff > 60){
          return Math.floor(diff / 60)+" minutes"
        }

        return Math.floor(diff)+" secondes"
      },
      nbr_players: function(){
        return this.players+" joueurs";
      }
    }
  };

  export default WeeklyTeam;
</script>

<style>
.statistiques{
  padding:24px 0 33px 0;
  width:100%;
  height:auto;
  display:block;
  margin: 0;
  list-style: none;
  text-align: left;
}
.statistiques li{
  display:inline-block;
  padding: 2px 24px 2px 30px;
  margin: 0;
  line-height:20px;
  font-size:17px;
  color: #ffffff;
  font-family: "Helvetica Neue",sans-serif;
  text-align: left;

  background-position: left center;
  background-repeat: no-repeat;
  background-size: 20px;
}
.statistiques li.hourglass-icon{
  background-image: url("../../assets/icon/hourglass.png");
}
.statistiques li.user-icon{
  background-image: url("../../assets/icon/user.png");
}
.statistiques li.pin-icon{
  background-image: url("../../assets/icon/pin.png");
}


.centred-title-container{
  width:100%;
  height:auto;
  margin:30px 0;
  padding:30px 146px;
  display:block;
  text-align:center;
}
h3{
  width:auto;
  max-width: 100%;
  height:auto;
  box-sizing: border-box;
  color:#000000;
  font-family: "Helvetica Neue",sans-serif;
  font-weight: bold;
  font-size: 30px;

  position:relative;
  display:inline-block;
}
h3:after{
  width:160px;
  height:5px;
  position:absolute;
  top:100%;
  left:50%;
  margin-left: -80px;
  margin-top:10px;
  content:"";
  background-color:#E82746;
}

.split{
  display:flex;
  height:auto;
  flex-direction: row;
}
.left{
  width:47%;
  min-width:200px;
  max-width:600px;
  height:auto;
  object-fit: contain;
  margin: 23px 0 23px 146px;
  flex-grow: 0;
  flex-shrink: 0;
  z-index: 1;
  background-color: rgb(255,255,255);
  position:relative;
  display:block;
  align-content:center;
  justify-content:center;
}

.left img{
  min-width:100%;
  height:auto;
  max-height: 90%;
  object-fit: cover;
  padding:0 20px 20px 0;
  background:#fff;
  position: absolute;
  right:0;
  top:50%;
  transform:translate3d(18px,calc(-50% + 10px),0);
}

.right{
  flex-grow: 1;
  flex-shrink: 1;
  position: relative;
  padding: 52px 84px;
  box-sizing: border-box;
  min-height: 100%;
  background: #E82746;
}
.right h2{
  width:auto;
  max-width: 100%;
  height:auto;
  display:block;
  color:rgb(255,255,255);
  font-family: "Helvetica Neue",sans-serif;
  font-weight: bold;
  font-size: 30px;
  text-align: left;
  margin:28px 0;
  line-height:34px;
  text-transform: uppercase;
}
.right .description{
  width:auto;
  max-width: 100%;
  height:auto;
  display:block;
  color:rgb(255,255,255);
  font-family: "Helvetica Neue",sans-serif;
  font-weight: normal;
  font-style: italic;
  line-height: 17px;
  font-size:16px;
  text-align: left;
  margin:0 0 28px 0;
}

.right:before{
  height: 140%;
  width:130%;
  z-index: -1;
  border-radius: 200px;
  position:absolute;
  left:50%;
  top:50%;
  content: "";

}

.button-container{
  width:100%;
  height:auto;
  text-align: center;
  margin:0 0 50px 0;
}

.button{
  display:inline-block;
  box-shadow: 0px 3px 6px #00000029;
  background-color: rgb(255,255,255);
  min-width:150px;
  height:auto;
  width:auto;
  box-sizing: border-box;
  padding: 12px 41px 12px 21px;
  font-size:19px;
  text-align: left;
  color: rgb(0,0,0);
  background-image: url("../../assets/icon/forward.png");
  background-repeat: no-repeat;
  background-position: right 9px center;
  background-size: 12px;
  font-family: "Helvetica Neue",sans-serif;
  font-weight: normal;
}
</style>
