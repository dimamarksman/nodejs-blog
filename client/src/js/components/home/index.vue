<template>
  <div class="page-home">
    <div class="row">
      <div class="col-md-9">
        <articles :articles-list="articles"></articles>
      </div>
      <div class="col-md-3">
        <sidebar></sidebar>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  import apiService from '../../services/api.service.js';
  import articles from './articles/index.vue';
  import sidebar from './sidebar/index.vue';

  export default {
      name: 'home',
      components: {
        articles,
        sidebar
      },
      data() {
        return {};
      },
      computed: {
        ...mapGetters([
            'articles',
            'tags'
        ])
      },
      methods: {
        ...mapActions({
          loadArticles: 'LOAD_ARTICLES'
        })
      },
      mounted() {
        this.loadArticles();
      }
  }
</script>