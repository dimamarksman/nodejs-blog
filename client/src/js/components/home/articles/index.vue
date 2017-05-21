<template>
  <div class="articles-list">
    <ul class="list-unstyled">
      <li v-for="article in articlesList">
        <article-item :article="article"></article-item>
      </li>
    </ul>
  </div>
</template>

<script>
    import article from './article/index.vue';

    export default {
        name: 'articles',
        props: [
          'articlesList'
        ],
        components: {
          articleItem: article
        }
    }
</script>