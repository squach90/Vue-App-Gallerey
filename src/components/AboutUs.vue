<template>
    <h1><span style="font-size: 30px" class="mdi mdi-image-multiple"></span>  Gallery</h1>
    
    
    <Gallery />    
</template>

<script>
import { mdiViewGalleryOutline } from "@mdi/js";
import Gallery from "./Gallery.vue";
export default {
  components: {
    Gallery,
  },
};
</script>

<style>
/* Ajoutez vos styles personnalisés ici */
</style>
