import Vue from 'vue';
import Router from 'vue-router';
import { lazyLoading } from './lazyLoading';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    {
      path: '/',
      components: {
        default: lazyLoading('home', true)
      }
    },
    {
      path: '/articles/:articleId',
      components: {
        default: lazyLoading('article', true)
      }
    },
    {
      path: '/about',
      components: {
        default: lazyLoading('about', true)
      }
    }
  ]
});

/**+
 * Set route body class
 * @param matched
 * @private
 */
const _setBodyClass = (matched) => {
  if (matched.some(record => typeof record.meta.bodyClass == 'string')) {
    matched.forEach(function (record) {
      if (typeof record.meta.bodyClass == 'string') {
        document.body.className += ' ' + record.meta.bodyClass
      }
    });
  } else {
    document.body.className = '';
  }
};

export default router;