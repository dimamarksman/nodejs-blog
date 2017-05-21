<template>
  <div class="page-article">
    <article class="article">
      <h1 class="article-title">{{article.title}}</h1>
      <div v-html="article.content"></div>
    </article>
  </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'article',
        data () {
          return {
            id: this.$route.params.articleId
          }
        },
        computed: {
          ...mapGetters([
              'article'
          ])
        },
        methods: {
          ...mapActions({
            loadArticle: 'LOAD_ARTICLE'
          })
        },
        mounted() {
          this.loadArticle(this.id);
        }
    }
</script>