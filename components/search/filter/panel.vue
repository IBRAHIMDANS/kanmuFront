<template>
  <div class="left-wrapper">
    <NuxtLink to="/" class="project-title">Kanmu</NuxtLink>

    <CheckboxList
      :max="3"
      :all="true"
      title="Location"
      :data="locations"
      @update="update"
      @change="changeLocation"
    />
    <CheckboxList
      :max="3"
      :all="true"
      title="Jeux"
      :data="games"
      @update="update"
      @change="changeGame"
    />
  </div>
</template>

<script lang="ts">
  //@ts-ignore
  import Left from "~/components/util/Left";

  const LeftFilterPanel = {
    components: {
      Left
    },
    props: {
      locations: Array,
      games: Array,
    },
    methods: {
      update: function(){
        // @ts-ignore
        this.$emit("update");
      },
      changeLocation: function (data) {
        // @ts-ignore
        this.$emit("change-location",data);
      },
      changeGame: function (data) {
        // @ts-ignore
        this.$emit("change-game",data);
      },
    },
  };

  export default LeftFilterPanel;
</script>

<style>
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
</style>
