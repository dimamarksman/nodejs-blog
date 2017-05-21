<template>
    <div class="container app-conteiner">
        <main-nav></main-nav>
        <transition name="fade"  mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import mainNav from './main-nav/index.vue';

    export default {
        name: 'app-container',
        components: {
            mainNav
        }
    }
</script>

<style lang="less">
    @import '../../less/index.less';
</style>