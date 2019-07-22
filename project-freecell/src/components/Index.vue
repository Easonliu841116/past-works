<template>
  <div>
    <div class="c-container mx-auto">
      <div class="c-slot-container mx-auto">
        <div class="c-slot-panel" id="blank-slot">
          <div class="c-blank c-slot" v-for="(item, key) in 4" :key="key">
              1
          </div>
        </div>
        <div class="c-slot-panel" id="target-slot">
          <div class="c-target c-slot" v-for="(item, key) in 4" :key="key">
              2
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
</style>
