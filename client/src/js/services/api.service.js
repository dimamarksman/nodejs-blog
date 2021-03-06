import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

export class ApiService {
  constructor() {
    this.api = Vue.http;
    this.prefix = '/api/';
  }
  get(url, query, isTextRes = false) {
    return this.api.get(this.prefix + url, {
      params: query
    }).then(res => {
      return isTextRes ? res.text() : res.json();
    });
  }
  post(url, data, isTextRes = false) {
    return this.api.post(this.prefix + url, data).then(res => {
      return isTextRes ? res.text() : res.json();
    });
  }
  put(url, data, isTextRes = false) {
    return this.api.put(this.prefix + url, data).then(res => {
      return isTextRes ? res.text() : res.json();
    });
  }
  delete(url, data, isTextRes = false) {
    return this.api.delete(this.prefix + url, data).then(res => {
      return isTextRes ? res.text() : res.json();
    });
  }
  // Methods
  getArticles() {
    return this.get('articles');
  }
  getTags() {
    return this.get('tags');
  }
  getArticle(articleId) {
    return this.get(`articles/${articleId}`);
  }
}


export default new ApiService();