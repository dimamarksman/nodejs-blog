<template>
    <div class="container">
        <h1>Hello Vue.js App</h1>
        <transition name="fade"  mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'app-container',
        components: { }
    }
</script>

<style lang="less">
    @import '../../less/index.less';
</style>