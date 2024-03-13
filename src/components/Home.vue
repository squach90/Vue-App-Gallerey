<template>
  <v-col style="max-height: calc(100vh - 112px); overflow-y: auto">
    <h1 align="center">
      Bonjour,<br />
      veuiller vous connecter
    </h1>
    <br />
    <Login />
    
  </v-col>
</template>

<script>
import Login from "./Login.vue";

export default {
  components: {
    Login,
  },
  data() {
    return {
      files: [], // Pour stocker les fichiers sélectionnés par l'utilisateur
      uploadedImages: [], // Pour stocker les informations sur les images téléchargées
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
        const file = this.files[i];

        // Lorsque la lecture du fichier est terminée
        reader.onload = (event) => {
          // Ajouter les informations sur l'image à uploadedImages
          this.uploadedImages.push({
            url: event.target.result,
            file: file,
          });

          // Stocker les informations sur les images dans le stockage local
          localStorage.setItem(
            "uploadedImages",
            JSON.stringify(this.uploadedImages)
          );
        };

        // Lire le fichier comme une URL de données
        reader.readAsDataURL(file);
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
  },
};
</script>
