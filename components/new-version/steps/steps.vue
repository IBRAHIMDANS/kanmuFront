<template>
  <ol class="grid">
    <Step v-for="(step, index) in steps" :number="index + 1" :title="step.title" :description="step.description" :key="index" />
  </ol>
</template>
<script lang="ts">
import {PropType} from "vue";
import Step from "./step.vue";

type TypeStep = {
  title: string,
  description: string,
  id: number,
}

const Steps = {
  components: {
    Step
  },
  props: {
    steps: Array as PropType<TypeStep[]>
  }
}

export default Steps
</script>
