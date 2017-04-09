import Vue from 'vue';
import Router from 'vue-router';
import { lazyLoading } from './lazyLoading';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
      path: '/',
      redirect: '/articles'
    },
    {
      path: '/articles',
      components: {
        default: lazyLoading('articles', true)
      }
    },
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

/**
 * Protecting routes
 */
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('jwt-token'),
    stop = false;

  //set bodyClass
  _setBodyClass(to.matched);

  if (!stop) {
    return next();
  }
});

export default router;