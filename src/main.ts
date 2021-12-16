import { createApp } from "vue";
import Vue  from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import './styles/tailwind.scss'
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';

// Import Bootstrap an BootstrapVue CSS files (order is important)

import router from './router'

const app = createApp(App);

app
.use(PrimeVue)
.use(router);


app.mount("#app");
