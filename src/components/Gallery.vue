<template>
  <v-layout>
    <v-row>
      <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
        <v-img
          :src="getImageUrl(n)"
          alt="Image"
          @click="handleImageClick(n)"
        ></v-img>
        <template v-slot:placeholder>
          <v-row align="center" class="fill-height ma-0" justify="center">
            <v-progress-circular
              color="grey-lighten-5"
              indeterminate
            ></v-progress-circular>
          </v-row>
        </template>
      </v-col>
    </v-row>
  </v-layout>
</template>
<script>
export default {
  methods: {
    getImageUrl(n) {
      // Replace this with your actual image URL generation logic
      return `https://picsum.photos/500/300?image=${n}`;
    },
    handleImageClick(n) {
      // Handle the image click event
      console.log(`Image ${n} clicked!`);
    },
  },
  
};
</script>
