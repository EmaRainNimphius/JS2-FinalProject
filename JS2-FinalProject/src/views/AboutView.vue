<script>
import ContentDetails from "@/components/ContentDetails.vue";
import Content from "@/models/Content.js";
import ContentList from "@/components/ContentList.vue";
import LibraryCollection from "@/models/LibraryCollection.js";

export default {
  name: 'AboutView',
  components: { ContentList, ContentDetails },
  data(){
    return {
      Contents: new LibraryCollection()
          .addItem(new Content('ContentBlock','About Us', 'About Us content would go here.' ))
          .addItem(new Content('ContentBlock','Our Purpose', 'Our Purpose content would go here.' ))
          .addItem(new Content('ContentBlock','Meet Hooman', 'Meet Hooman content would go here.' ))
          .addItem(new Content('InfoCard','Welcome!', 'Hello! Welcome to our site!' ))
          .addItem(new Content('InfoCard','Title :)))))', "Title's content would go here" ))

    }
  }
}

</script>

<template>
  <!-- display content -->
  <div class="content pt-0 mt-0">
    <div v-for="Content in Contents">
      <div v-if="Content.type === 'Content'">
        <ContentList :item="Content.category"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container{
  margin-right: 50px;
  margin-left: 50px;

}
</style>
