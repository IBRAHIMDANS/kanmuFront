<template>
  <div class="line">
    <SearchResultItem
      v-for="item of data"
      :v-key="item.slug"
      :favorites="favorites"
      :slug="item.slug"
      :image-logo="item.image.logo"
      :image-team="item.image.team"
      :name="item.name"
      :like="item.like"
      @favorite="favorite"
    />
  </div>
</template>

<script>
import SearchResultItem from './SearchResultItem'

const SearchResult = {
  components: [SearchResultItem],
  props: {
    favorites: Array,
    data: Array,
  },
  methods: {
    favorite: function (slug) {
      // @ts-ignore
      this.$emit("favorite",slug);
    }
  }
}

export default SearchResult
</script>
