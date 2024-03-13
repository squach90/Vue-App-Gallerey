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
};
</script>
