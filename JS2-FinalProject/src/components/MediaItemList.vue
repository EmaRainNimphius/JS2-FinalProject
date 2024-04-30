<script>
import MediaDetails from "@/components/ContentDetails.vue";
import { AudioBook, Book } from "@/models/Media.js";

export default {
  name: "MediaItemList",
  components: { MediaDetails },
  props:{
    item: {
      type: AudioBook, Book
    }
  },
}
</script>

<template>

    <MediaDetails :item="item"/>

</template>

<style lang="scss">

</style>
