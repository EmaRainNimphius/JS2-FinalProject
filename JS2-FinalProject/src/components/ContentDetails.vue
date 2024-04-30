<script>
import Content from "@/models/Content.js";

export default{
  name: 'ContentDetails',
  props: {
    item: { type: Content }
  }
}
</script>

<template>

  <div class="container mt-4">
    <!-- AboutUs -->
    <div v-if="item.category === 'ContentBlock'">
      <div class="contentInfo">
        <p>Type: {{ item.type }}</p>
        <p>Category: {{ item.category }}</p>
        <p>Title: {{ item.title }}</p>
        <p>Description: {{ item.description }}</p>
        <br>
      </div>
    </div>

<!-- -->

  </div>
</template>

<style lang="scss" scoped>

p {
  font-size: 20px;
}

</style>