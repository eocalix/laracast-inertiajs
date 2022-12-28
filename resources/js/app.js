import { createApp, h } from 'vue'
import { createInertiaApp, Link } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import Layout from './Shared/Layout';

// createInertiaApp({
//   resolve: name => require(`./Pages/${name}`),
//   setup({ el, App, props, plugin }) {
//     createApp({ render: () => h(App, props) })
//       .use(plugin)
//       .component('Link', Link)
//       .mount(el)
//   },
// })

createInertiaApp({
  resolve: name => { 
    const page = require(`./Pages/${name}`).default;
    //page.layout = page.layout || Layout;
    page.layout ??= Layout;
    return page;
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .component('Link', Link)
      .mount(el)
  },
})

InertiaProgress.init({
  color: 'red',
  showSpinner: true
});