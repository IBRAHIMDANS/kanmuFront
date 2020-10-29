<template>
  <div class="left">
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
  const LeftFilterPanel = {
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
</style>
