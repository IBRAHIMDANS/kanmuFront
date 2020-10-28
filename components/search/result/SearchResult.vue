<template>
  <div class="line">
    <SearchResultItem
      v-for="item of data"
      :v-key="item.slug"
      :image-logo="item.image.logo"
      :image-team="item.image.team"
      :name="item.name"
      :like="item.like"
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
  padding:0 50px;
  box-sizing:border-box;
}
</style>
