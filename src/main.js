import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AppLayout from "./components/AppLayout.vue";

const app = createApp(App);
app.component("AppLayout", AppLayout);
app.use(store);
app.use(router);
app.mount("#app");
