<template>
  <v-layout style="max-height: calc(100vh - 112px); overflow-y: auto">
    <v-row>
      <v-col v-for="n in 10" :key="n" class="d-flex child-flex" cols="6">
        <v-img
          :src="getImageUrl(n)"
          alt="Image"
          @click="openPhoto(n), handleImageClick(n)"
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
    <v-dialog v-model="dialog" max-width="800">
      <img
        v-if="selectedPhoto !== null"
        :src="selectedPhoto.url"
        style="width: 100%"
      />
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      photos: [
        { id: 1, url: "" },	
        { id: 2, url: "https://picsum.photos/500/300?image=1" },
        { id: 3, url: "https://picsum.photos/500/300?image=2" },
        { id: 4, url: "https://picsum.photos/500/300?image=3" },	
        { id: 5, url: "https://picsum.photos/500/300?image=4" },
        { id: 6, url: "https://picsum.photos/500/300?image=5" },
        { id: 7, url: "https://picsum.photos/500/300?image=6" },	
        { id: 8, url: "https://picsum.photos/500/300?image=7" },
        { id: 9, url: "https://picsum.photos/500/300?image=8" },
        { id: 10, url: "https://picsum.photos/500/300?image=9" },
        { id: 11, url: "https://picsum.photos/500/300?image=10" },

        // Ajoutez d'autres photos ici
      ],
      dialog: false,
      selectedPhoto: null,
    };
  },
  methods: {
    openPhoto(index) {
      this.selectedPhoto = this.photos[index];
      this.dialog = true;
    },
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

<style>
.no-scroll {
  height: 100px; /* Définissez une hauteur fixe pour l'élément */
  white-space: nowrap; /* Empêche le texte de s'enrouler sur plusieurs lignes */
  overflow: hidden; /* Cache le contenu qui dépasse la hauteur de l'élément */
  text-overflow: ellipsis; /* Définissez une hauteur fixe pour l'élément */
}
</style>
