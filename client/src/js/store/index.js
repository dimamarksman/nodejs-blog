import Vue from 'vue';
import Vuex from 'vuex';

import articlesModule from './modules/articles';

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        articles: articlesModule
    }
});