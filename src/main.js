// Import Vue and App
import { createApp } from 'vue';
import App from './App.vue';

import './assets/main.css';

// Import Font Awesome packages
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import specific icons
import { faFolder, faArrowLeft, faFilter, faArrowRight, faSearch  } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Add icons to the library
library.add(faFolder, faSearch, faFilter, faArrowLeft, faArrowRight, faGithub);

// Create app and register FontAwesomeIcon as a global component
createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
