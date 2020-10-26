<template>
  <div class="line">
    <SearchResultItem
      v-for="item of data"
      :v-key="item.teamName"
      :logo-image="item.logoImage"
      :team-image="item.teamImage"
      :team-name="item.teamName"
      :team-likes="item.teamLikes"
    />
  </div>
</template>

<script>
import SearchResultItem from './SearchResultItem'

const SearchResult = {
  components: [SearchResultItem],
  props: {
    data: Array,
  },
}

export default SearchResult
</script>

<style>
.line {
  width: 100%;
  height: auto;
  display: block;
}
</style>
