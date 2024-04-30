<script>

import MediaItemList from "@/components/MediaItemList.vue";
import axios from 'axios';
import LibraryCollection from "@/models/LibraryCollection.js";
import { MediaFactory } from "@/models/MediaFactory.js";
import MediaDetails from "@/components/MediaDetails.vue";

export default {
  components: {MediaDetails, MediaItemList, axios},
  data() {
    return {
      searchTerm: 'Dissociative Identity Disorder',
      searchCollection: new LibraryCollection(),
    }
  },
  methods: {
    display(){
      // validation
      if(this.searchTerm === "") {
        console.log("Invalid user input");
        alert("Invalid user input");

      }else {
        // console log of user inputted search term
        console.log('Searched Term: ', this.searchTerm);

        // clear results
        this.searchCollection = new LibraryCollection();
        // console.log("Empty LibraryCollection: ", this.searchCollection)

        // iTunes url
        let url = 'https://itunes.apple.com/search?term=' + this.searchTerm;

        axios.post(url)
            .then(response => {
              if (response.data?.results?.length > 0) {
                this.searchCollection = MediaFactory.createMedia(response.data.results);
                // console.log('Search Results:', this.searchCollection);
              }
            })
            .catch(error => {
              console.log('API SEARCH ERROR', error);
              alert('API Search Error');
            })
      }
    },
  },
}
</script>

<template>
  <div class="container mt-4">

    <form>
      <div class="row justify-content-between">
        <div class="col-sm-5 col-md-9">
          <!-- search bar -->
          <div class="row">
            <div class="col-sm-4 col-md-5 pe-0">
              <input type="text"
                     id="userInput"
                     class="form-control"
                     aria-label="Search library"
                     placeholder="Dissociative Identity Disorder"
                     v-model="searchTerm">
            </div>
            <div class="col-sm-3 col-md-1">
              <button type="button"
                      class="btn p-0 px-3"
                      @click="display">
                Search Library
              </button>
            </div>
          </div>
        </div>

        <!-- filter search -->
        <div class="col-sm-4 col-md-3">
          <div class="input-group">
            <!-- use of v-model -->
            <!-- <select v-model="category" class="form-select bg-body-secondary" id="filter"> -->
            <select class="form-select bg-body-secondary" id="filter">
              <option selected disabled value="">Filter by Media Type</option>
              <option class="option-item" value="audiobook">Audiobook</option>
              <option class="option-item" value="book">Book</option>
              <option class="option-item" value="magazine">Magazine</option>
              <option class="option-item" value="podcast">Podcast</option>
            </select>
          </div>


          <!--        <div class="col-sm-3 col-md-3">-->
          <!--          <div class="dropdown">-->
          <!--            <button class="btn dropdown-toggle"-->
          <!--                    id="dropdown-btn"-->
          <!--                    type="button"-->
          <!--                    data-bs-toggle="dropdown"-->
          <!--                    aria-expanded="false"> Filter By-->
          <!--            </button>-->
          <!--            <ul class="dropdown-menu">-->
          <!--              <li><a class="dropdown-item" href="#">Audiobook</a></li>-->
          <!--              <li><a class="dropdown-item" href="#">Book</a></li>-->
          <!--              <li><a class="dropdown-item" href="#">Magazine</a></li>-->
          <!--              <li><a class="dropdown-item" href="#">Podcast</a></li>-->
          <!--            </ul>-->
          <!--          </div>-->
          <!--        </div>-->

        </div>
      </div>
    </form>

    <!-- displays media -->
    <div class="item-list mt-4">
    <!-- organization of cards in column/row-->
      <div class="row row-cols-1 row-cols-sm-1 row-cols-lg-2 row-cols-xxl-3 g-4">
        <!-- loops through the results that match criteria based on their search -->
        <div class="col" v-for="item in searchCollection">
          <!-- displays cards -->
          <media-details :item="item" />
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
@import "../src/scss/_variables.scss";

nav{
  margin-top: 30px;
}
.btn{
  min-height: 38px;
  width: 150px;
  background-color: $acc;
  color:white;
}

.input-group{
  height: 38px;
}


//#dropdown-btn{
//  height: 38px;
//  width: 200px;
//  text-align: end;
//  padding-right: 20px;
//}
//.dropdown-menu{
//  width: 200px;
//}
</style>