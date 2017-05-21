<template>
  <article class="article-item">
    <h3 class="article-title">{{article.title}}</h3>
    <div class="article-content" v-html="article.content"></div>
  </article>
</template>

<script>
    export default {
        name: 'article',
        props: [
          'article'
        ]
    }
</script>