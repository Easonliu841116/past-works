<template>
  <div id="app" class="mt-0">
    <Index/>
  </div>
</template>

<script>
import Index from './components/Index.vue';

export default {
  name: 'app',
  components: {
    Index,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC:300,700&display=swap&subset=chinese-traditional');
@import "@/assets/scss/all.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
