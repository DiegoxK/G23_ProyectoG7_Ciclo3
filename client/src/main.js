import * as Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.createApp(App)
  .use(router, axios, VueAxios)
  .mount("#app");

axios.defaults.baseURL = "http://localhost:3000/api";
