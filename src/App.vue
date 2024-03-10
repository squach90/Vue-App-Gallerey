<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list-item
        prepend-avatar="https://e7.pngegg.com/pngimages/492/286/png-clipart-computer-icons-user-profile-avatar-avatar-heroes-monochrome.png"
        title="User"
      ></v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          title="Home"
          value="home"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-forum"
          title="About"
          value="about"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
  <v-layout class="overflow-visible" rounded="lg" style="height: 56px">
    <v-bottom-navigation v-model="value" color="primary" horizontal>
      <v-btn rounded="lg" to="/page2">
        <v-icon>mdi-history</v-icon>

        Recents
      </v-btn>

      <v-btn rounded="lg" to="/">
        <v-icon>mdi-home</v-icon>

        Home
      </v-btn>

      <v-btn rounded="lg" to="/settings">
        <v-icon>mdi-cog</v-icon>

        Settings
      </v-btn>
    </v-bottom-navigation>
  </v-layout>

  <!-- V-CARD -->
  <v-card class="mx-auto" max-width="448">
    <v-layout>
      <v-app-bar color="primary" density="compact">
        <template v-slot:prepend>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Photos</v-app-bar-title>

        <v-fade-transition>
          <v-card-text class="animated-card" v-if="showElement">
            <v-text-field
              :loading="loading"
              density="compact"
              clearable
              label="Search"
              variant="solo"
              hide-details
              single-line
              @click:append-inner="onClick"
            ></v-text-field>
          </v-card-text>
        </v-fade-transition>
        <template v-slot:append>
          <v-btn icon="mdi-magnify" @click="showElement = !showElement"></v-btn>
          <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn icon="mdi-dots-vertical" v-bind="activatorProps"></v-btn>
            </template>

            <template v-slot:default="{ isActive }">
              <v-card title="À Propos">
                <v-card-text> Ce site est purement fais de test. </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn text="Fermer" @click="isActive.value = false"></v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </template>
      </v-app-bar>
    </v-layout>
  </v-card>
  <router-view></router-view>
</template>
<script>
import Gallery from "./components/Gallery.vue";

export default {
  components: {
    Gallery,
  },
  data() {
    return {
      showElement: false,
      value: null,
      drawer: null,
    };
  },

  methods: {
    redirectToPageAbout() {
      this.$router.push("/page2");
    },
  },
};
</script>
<script setup></script>

<style>
.v-row {
  size: 50%;
  justify-content: center;
}

.v-btn {
  position: relative;
  margin: auto;
  justify-content: center;
  align-items: center;
}
.d-none {
  display: none;
}
.animated-card {
  transition: opacity 0.5s ease;
}
</style>
