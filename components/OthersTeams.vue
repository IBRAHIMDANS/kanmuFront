<template>
  <div>
    <div class="centred-title-container">
      <h3>Voir d’autres équipes</h3>
    </div>
    <div class="sponsors-container">
      <ul class="sponsors">
        <li>
          <a>
            <img src="../assets/team/1.png"/>
          </a>
        </li>
        <li>
          <a>
            <img src="../assets/team/2.png"/>
          </a>
        </li>
        <li>
          <a>
            <img src="../assets/team/3.png"/>
          </a>
        </li>
        <li>
          <a>
            <img src="../assets/team/4.png"/>
          </a>
        </li>
        <li>
          <a>
            <img src="../assets/team/5.png"/>
          </a>
        </li>
        <li>
          <a>
            <img src="../assets/team/7.png"/>
          </a>
        </li>
      </ul>
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


.sponsors-container{
  padding: 0;
  margin:60px 0 120px 0;
  width:100%;
  height:auto;
  text-align: center;
}
.sponsors{
  width:100%;
  max-width:1200px;
  height:auto;
  display:inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  align-content: flex-start;
  justify-content: space-around;
  list-style: none;
  padding:0;
  margin:0;
}
.sponsors li{
  width:auto;
  max-width:100px;
  height:auto;
  max-height:200px;
  display:block;
  margin:0 15px;
  flex-shrink: 1;
  flex-grow: 1;
  padding:0;
}
.sponsors li a,
.sponsors li img{
  width:100%;
  height:100%;
  display:block;
  margin:0;
  padding:0;
  object-fit: contain;
  object-position: top;
}
</style>
