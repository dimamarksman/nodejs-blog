import apiService from '../../services/api.service.js';
import {
  SET_ARTICLES,
  LOAD_ARTICLES
} from '../action-types';

export default {
  state: {
    articles: []
  },
  getters: {
    articles: state => {
      return state.articles;
    }
  },
  mutations: {
    [SET_ARTICLES] (state, articles) {
      state.articles = articles;
    }
  },
  actions: {
    [LOAD_ARTICLES]: ({ commit }) => {
      return apiService.getArticles().then((articles) => {
        commit(SET_ARTICLES, articles);
        return articles;
      });
    }
  }
}