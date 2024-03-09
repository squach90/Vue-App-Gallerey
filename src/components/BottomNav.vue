<template>
  <v-bottom-navigation v-model="value" color="primary" horizontal>
    <v-btn rounded="lg" to="/page2">
      <v-icon>mdi-history</v-icon>

      Recents
    </v-btn>

    <v-btn rounded="lg" to="/home">
      <v-icon>mdi-home</v-icon>

      Home
    </v-btn>

    <v-btn rounded="lg">
      <v-icon>mdi-heart</v-icon>

      Like
    </v-btn>
  </v-bottom-navigation>
</template>

<script></script>
