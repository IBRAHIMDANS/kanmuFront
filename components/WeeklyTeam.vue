<template>
  <div class="split">
    <img class="left" src="../assets/team/6.png">
    <div class="right">
      <h2>LDV Esport</h2>
      <p class="description">“Première équipe universitaire d’e-sport en France, cette association esport s’est faite remarquer à maintes reprises depuis déjà 4 ans. Une équipe qui excelle en compétition et à le coeur sur la main, comme Dernièrement avec la 14aine e-sport !”</p>

      <div class="button-container">
        <a class="button">En savoir plus</a>
      </div>
    </div>
  </div>

</template>

<style>
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
  width:37%;
  height:auto;
  max-height:50%;
  object-fit: contain;
  margin: 23px 23px 0 146px;
  flex-grow: 0;
  flex-shrink: 0;
  z-index: 1;
  padding-right: 23px;
  background-color: rgb(255,255,255);
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
  margin:28px 0;
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
  margin:50px 0;
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
  background-image: url("../assets/icon/forward.png");
  background-repeat: no-repeat;
  background-position: right 9px center;
  background-size: 12px;
  font-family: "Helvetica Neue",sans-serif;
  font-weight: normal;
}
</style>
