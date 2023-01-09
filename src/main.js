import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


library.add(faTwitter, faChevronRight);



const app = createApp(App)

app.use(router)


app.component("font-awesome-icon", FontAwesomeIcon).mount('#app')
