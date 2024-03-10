import { registerPlugins } from "@/plugins";

import App from "./App.vue";
import Home from "./components/Home.vue";

import { createApp } from "vue";
import router from "./router";
const app = createApp(App);

registerPlugins(app);
app.use(router);

app.mount("#app");
