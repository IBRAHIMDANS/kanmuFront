<template>
  <div>
    <div class="centred-title-container">
      <h3>{{ title }}</h3>
    </div>
    <div class="sponsors-container">
      <ul class="sponsors">
        <li v-for="item in data" :v-key="item.id">
          <a :href="item.href">
            <img :src="item.image"/>
            <span class="title">{{item.title}}</span>
          </a>
        </li>
      </ul>
      <div class="button-container">
        <a class="more">Voir plus</a>
      </div>
    </div>
  </div>
</template>


<script>
  const Propals = {
    props: {
      data: Array,
      title: String
    }
  }

  export default Propals;
</script>

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
  flex-wrap: wrap;
  align-items: stretch;
  align-content: flex-start;
  justify-content: space-around;
  list-style: none;
  padding:0;
  margin:0;
}
.sponsors li{
  width:50%;
  height:auto;
  display:block;
  box-sizing:border-box;
  padding:40px 20px;
  flex-shrink: 1;
  flex-grow: 1;
}
.sponsors li a{
  display:flex;
  flex-direction:column;
  height:auto;
  width:100%;
  padding:0;
  margin:0;
  cursor:pointer;
}

.sponsors li a img{
  width:100%;
  height:auto;
  max-height:350px;
  display:block;
  margin:0;
  padding:0;
  object-fit: cover;
  object-position:center;
}
.sponsors li a .title{
  width:100%;
  height:auto;
  margin:0;
  display:block;
  text-align:center;
  color:#000000;
  font-family: "Helvetica Neue",sans-serif;
  font-weight: bold;
  font-size:22px;
  line-height:22px;
  padding:17px 15px;
  box-sizing:border-box;
}

.button-container{
  width:100%;
  height:auto;
  text-align:center;
  display:block;
}
.button-container .more{
  display:inline-block;
  width:auto;
  height:auto;
  font-size:18px;
  line-height:18px;
  padding:12px 37px 12px 22px;
  cursor:pointer;
  box-shadow: 0 3px 6px #00000029;

  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 17px auto;
  background-image:url("/arrow-right.svg");
}

</style>
