<script>
import ContentDetails from "@/components/ContentDetails.vue";
import Content from "@/models/Content.js";

export default {
  name: "ContentList",
  components: { ContentDetails },
  props:{
    item: { type: Content }
  },
}

</script>

<template>

  <ContentDetails :item="item"/>

</template>

<style lang="scss">

</style>
