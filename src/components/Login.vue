<template>
  <v-img
    class="mx-auto my-6"
    max-width="228"
    src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
  ></v-img>
  <v-card align="center" class="mx-auto" max-width="344" title="Registration">
    <v-container>
      <v-text-field
        color="primary"
        label="First name"
        variant="underlined"
        placeholder="John"
      ></v-text-field>
      <v-text-field
        color="primary"
        label="Last name"
        variant="underlined"
        placeholder="Woodson"
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-email-outline"
        color="primary"
        label="Email"
        variant="underlined"
        placeholder="a@a.com"
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-lock-outline"
        color="primary"
        label="Password"
        placeholder="Enter your password"
        variant="underlined"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-checkbox
        color="secondary"
        label="I agree to site terms and conditions"
        required
      ></v-checkbox>
    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn class="mb-8" color="blue" size="large" variant="tonal" block>
        Sign Up
      </v-btn>
    </v-card-actions>
  </v-card>
  <br>
</template>

<script>
export default {
  data: () => ({
    visible: false,
  }),
};
</script>
