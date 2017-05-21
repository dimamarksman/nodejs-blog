import apiService from '../../services/api.service.js';

export default {
  state: {
    articles: [],
    tags: [],
    article: {}
  },
  getters: {
    articles: state => {
      return state.articles;
    },
    article: state => {
      return state.article;
    },
    tags: state => {
      return state.tags;
    }
  },
  mutations: {
    SET_ARTICLES (state, articles) {
      state.articles = articles;
    },
    SET_ARTICLE (state, article) {
      state.article = article;
    },
    SET_TAGS (state, tags) {
      state.tags = tags;
    }
  },
  actions: {
    LOAD_ARTICLES: ({ commit }) => {
      return apiService.getArticles().then((articles) => {
        commit('SET_ARTICLES', articles);
        return articles;
      });
    },
    LOAD_ARTICLE: ({ commit }, articleId) => {
      return apiService.getArticle(articleId).then((article) => {
        commit('SET_ARTICLE', article);
        return article;
      });
    },
    LOAD_TAGS: ({ commit }) => {
      return apiService.getTags().then((tags) => {
        commit('SET_TAGS', tags);
        return tags;
      });
    }
  }
}