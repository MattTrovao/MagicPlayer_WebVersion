import { createApp } from 'vue';
import App from "./App.vue";
import './css/main.css';
import i18n from "./i18n";
import router from "./router";

import "sweetalert2/dist/sweetalert2.min.css";
import VueSweetalert2 from "vue-sweetalert2";

const app = createApp(App);


import Btn from "@/components/Btn.vue";
app.component("Btn", Btn);




app.use(router);
app.use(i18n);
app.use(VueSweetalert2);

app.mount("#app");
