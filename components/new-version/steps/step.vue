<template>
  <div class="column-3 step">
    <span class="number">{{number}}</span>
    <h3 class="title">{{title}}</h3>
    <h3 class="description">{{description}}</h3>
  </div>
</template>
<script lang="ts">
const Step = {
  props: {
    number: Number,
    description: String,
    title: String,
  }
}

export default Step
</script>
