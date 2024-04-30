<script>

export default {
  name: "MediaDetails",
  props: {
    item: Object,
  },
}
</script>

<template>

  <div class="card">
    <div class="card-body">

      <div v-if="item.wrapperType === 'audiobook' || item.kind === 'podcast'">

        <div class="header">
          <h3 class="fw-bold">{{ item.collectionName }}</h3>
        </div>
        <hr>
        <div class="body">
          <div class="row">
            <div class="col-4 me-2">
              <img :src="item.artworkUrl100 " alt="image">
            </div>
            <div class="col-7">
              <div class="row">

                <!-- artist -->
                <div class="row">
                  <div class="col-3 pe-0 ps-1">
                    <p class="fw-bold">Artist:</p>
                  </div>
                  <div class="col">
                    <p>{{ item.artistName }}</p>
                  </div>
                </div>
                <hr>
                <!-- media type -->
                <div class="row row-cols-2">
                  <p class="label fw-bold ps-1">Media Type: </p>
                  <p class="ps-0">{{ item.type }}</p>
                </div>
                <hr>
                <!-- genre -->
                <div class="row">
                  <div class="col-3 pe-0 ps-0">
                    <p class="label fw-bold ps-1">Genre:</p>
                  </div>
                  <div class="col">
                    <p>{{ item.primaryGenreName }}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="footer">
        <div class="container" style="float: bottom">
          <div class="row mt-1">
            <button id="details" class="btn btn-lg">M O R E &nbsp;&nbsp; D E T A I L S</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../src/scss/_variables.scss";

h3{
  color: $gray-blu;
}
img{
  height: 130px;
  width: 130px;
}
#details{
  background-color: $dusty-pl;
  color: white;
}
.card{
  min-height: 300px;
}
</style>