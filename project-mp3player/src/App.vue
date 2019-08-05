<template>
  <div id="app">
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

<style>
*, html, body{
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
