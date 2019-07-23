<template>
  <div>
    <div class="c-main-container mx-auto">
      <div class="logo">
        <h1>Freecell</h1>
      </div>
      <div class="settings-container">
        <a href="#" @click.prevent class="setting bg-reset">重玩</a>
        <a href="#" @click.prevent class="setting bg-pre_step">上一步</a>
        <a href="#" @click.prevent class="setting bg-pause">暫停</a>
      </div>
      <div class="c-decks-container">
        <div class="c-deck-panel" id="blank-deck">
          <div class="c-blank-deck-border c-card c-bg-deck" v-for="(item, key) in 4" :key="key">
              1
          </div>
        </div>
        <div class="c-deck-panel" id="target-deck">
          <div class="c-target-deck-shadow c-card" v-for="(item, key) in 4" :key="key">
              2
          </div>
        </div>
      </div>
      <div class="c-cards-container">
        <div class="c-cards-panel">
          <div class="c-card-column" v-for="(item, key) in 4" :key="key">
            <div class="c-card c-cards-border c-card-position-absolute"
            v-for="(item, key) in 5" :key="key">
              3
            </div>
          </div>
        </div>
        <div class="c-cards-panel">
          <div class="c-card-column" v-for="(item, key) in 4" :key="key">
            <div class="c-card c-cards-border c-card-position-absolute"
            v-for="(item, key) in 5" :key="key">
              4
            </div>
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
