<template>
  <div class="result-item">
    <div class="images">
      <img class="team" :src="teamImage" />
      <img class="logo" :src="logoImage" />
    </div>
    <div class="informations">
      <h2 class="result-item-title">
        {{ teamName }}
      </h2>
      <sub>{{ teamLikes }} personnes aiment cette structure</sub>
    </div>
  </div>
</template>

<script>
const SearchResultItem = {
  props: {
    teamImage: String,
    logoImage: String,
    teamName: String,
    teamLikes: String,
  },
}

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
  padding: 50px 50px 50px 170px;
  box-sizing: border-box;
}
</style>
