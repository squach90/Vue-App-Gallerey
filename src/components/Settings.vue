<template>
  <v-col style="max-height: calc(100vh - 112px); overflow-y: auto">
    <h1 align="center">Settings</h1>

    <div class="box">
      <h2>Données du Compte</h2>
      <v-text-field
        prepend-inner-icon="mdi-account-outline"
        label="Nom"
      ></v-text-field>
      <v-text-field label="Prénom"></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-email-outline"
        label="Email"
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-lock-outline"
        label="Mot de Passe"
      ></v-text-field>
      <div class="btn_Save">
        <v-btn color="primary">Enregistrer</v-btn>
      </div>
    </div>
    <v-dialog max-width="500">
      <template v-slot:activator="{ props: activatorProps }">
        <div class="box">
          <h2>Données Photos et autres</h2>
          <v-btn color="red" v-bind="activatorProps">Tout Effacer</v-btn>
        </div>
      </template>

      <template v-slot:default="{ isActive }">
        <v-card title="Supression Total" color="red">
          <v-card-text> Êtes-vous sûr de vouloir supprimer toutes les données ?<br> Cette action est irréversible. </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Supprimer" @click="isActive.value = false"></v-btn>
            <v-btn text="Annuler" @click="isActive.value = false"></v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-col>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAccount } from "@mdi/js";

export default {
  components: {
    SvgIcon,
  },
  data() {
    return {
      drawer: null,
      path: mdiAccount,
    };
  },
};
</script>

<style>
template {
  overflow-y: auto;
}
.box {
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 5px #ccc;
  box-sizing: border-box;
  background-color: #f9f9f9;
  color: #333;
  font-family: Arial, sans-serif;
  font-size: 16px;
}

.btn_Save {
  text-align: center;
}
</style>
