<template>
  <div>
    <v-file-input
      type="file"
      @change="handleFileUpload"
      prepend-icon="mdi-camera"
    />
    <v-btn @click="uploadImage">Importer des images</v-btn>

    <!-- Afficher les images téléchargées -->
    <div v-for="(image, index) in uploadedImages" :key="index">
      <img
        :src="image.url"
        :style="{ width: image.width + 'px', height: image.height + 'px' }"
        alt="Image"
      />
      <div class="button-container">
        <v-btn color="primary" @click="resizeImage(index, '+')"
          ><span class="mdi mdi-plus"></span
        ></v-btn>
        <v-btn color="primary" @click="resizeImage(index, '-')"
          ><span class="mdi mdi-minus"></span
        ></v-btn>
        <v-btn color="error" @click="deleteImage(index)">Supprimer</v-btn>
      </div>
    </div>
  </div>
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
import axios from "axios";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMinus } from "@mdi/js";
export default {
  components: {
    SvgIcon,
  },
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
      files: [], // Pour stocker les fichiers sélectionnés par l'utilisateur
      uploadedImages: [],
      dialog: false,
      path: mdiMinus,
      selectedPhoto: null,
    };
  },
  mounted() {
    // Récupérer les informations sur les images depuis le stockage local lors du chargement de la page
    const storedImages = JSON.parse(localStorage.getItem("uploadedImages"));
    if (storedImages) {
      this.uploadedImages = storedImages;
    }
  },
  methods: {
    handleFileUpload(event) {
      // Récupérer les fichiers sélectionnés par l'utilisateur
      this.files = event.target.files;
    },
    uploadImage() {
      for (let i = 0; i < this.files.length; i++) {
        const reader = new FileReader();

        // Lorsque la lecture du fichier est terminée
        reader.onload = (event) => {
          // Ajouter les informations sur l'image à uploadedImages
          const img = new Image();
          img.src = event.target.result;
          img.onload = () => {
            this.uploadedImages.push({
              url: event.target.result,
              width: img.width,
              height: img.height,
            });
          };

          // Stocker les informations sur les images dans le stockage local
          localStorage.setItem(
            "uploadedImages",
            JSON.stringify(this.uploadedImages)
          );
        };

        // Lire le fichier comme une URL de données
        reader.readAsDataURL(this.files[i]);
      }
    },
    deleteImage(index) {
      // Supprimer l'image à l'index spécifié de uploadedImages
      this.uploadedImages.splice(index, 1);

      // Mettre à jour le stockage local
      localStorage.setItem(
        "uploadedImages",
        JSON.stringify(this.uploadedImages)
      );
    },
    resizeImage(index, direction) {
      const resizeFactor = direction === "+" ? 1.1 : 0.9; // Facteur de redimensionnement

      // Mettre à jour les dimensions de l'image à l'index spécifié
      this.uploadedImages[index].width *= resizeFactor;
      this.uploadedImages[index].height *= resizeFactor;
    },
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
.v-btn-like {
  padding: 8px 16px;
  background-color: #1976d2;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.v-btn-like:hover {
  background-color: #1565c0;
}

.no-scroll {
  height: 100px; /* Définissez une hauteur fixe pour l'élément */
  white-space: nowrap; /* Empêche le texte de s'enrouler sur plusieurs lignes */
  overflow: hidden; /* Cache le contenu qui dépasse la hauteur de l'élément */
  text-overflow: ellipsis; /* Définissez une hauteur fixe pour l'élément */
}
</style>
