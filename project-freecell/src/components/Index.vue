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
  data() {
    return {
      decks: {
        base: [[], [], [], [], [], [], [], []],
        blank: [[], [], [], []],
        target: [[], [], [], []],
      },
    };
  },
  methods: {
    // 預設三種發牌方式
    deal() {
      const vm = this;
      const tempDeck = [...vm.shuffledCard];
      const randomNum = Math.floor(Math.random() * 3);
      if (randomNum === 1) {
        vm.decks.base.map((el, index) => {
          if (index % 2 === 0) {
            el.push(tempDeck.splice(0, 7));
          } else {
            el.push(tempDeck.splice(0, 6));
          }
          return vm.decks.base;
        });
      } else if (randomNum === 2) {
        vm.decks.base.map((el, index) => {
          if (index <= 3) {
            el.push(tempDeck.splice(0, 7));
          } else {
            el.push(tempDeck.splice(0, 6));
          }
          return vm.decks.base;
        });
      } else {
        vm.decks.base.map((el, index) => {
          if (index <= 3) {
            el.push(tempDeck.splice(0, 6));
          } else {
            el.push(tempDeck.splice(0, 7));
          }
          return vm.decks.base;
        });
      }
      console.log(tempDeck);
    },
  },
  computed: {
    // 亂數產生牌
    shuffledCard() {
      // 快速產生 1 ~ 52 的陣列
      const tempArray = Array.from(new Array(52)).map((el, key) => key + 1);
      // Fisher–Yates shuffle 演算法(打亂牌組)
      const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };
      return shuffle(tempArray);
    },
  },
  mounted() {
    this.deal();
    console.log(this.decks.base);
  },
};
</script>

<style lang="scss">
</style>
