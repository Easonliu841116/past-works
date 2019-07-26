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
          </div>
        </div>
        <div class="c-deck-panel" id="target-deck">
          <div class="c-target-deck-shadow c-card" v-for="(item, key) in 4" :key="key"
          :class="{['c-target' + (key + 1)]: true}">
          </div>
        </div>
      </div>
      <div class="c-cards-container">
        <div class="c-cards-panel">
          <div class="c-card-column" v-for="(item, itemKey) in 4" :key="itemKey">
            <div v-for="(el, elKey) in decks.base[item - 1]" :key="elKey">
              <div class="c-card c-cards-border c-card-position-absolute"
              v-for="(card, cardKey) in el" :key="cardKey" :class="{[cardKey + 1]: true}">
                <div class="num-wrapper" :id="card">
                  <span class="text-left-top">{{card | CardNumberFilter}}</span>
                  <span class="text-right-bottom">{{card | CardNumberFilter}}</span>
                  <img class="img-left-top">
                  <img class="img-right-bottom">
                </div>
              </div>
            </div>
          </div>
        </div>
        
        弄出圖片 可參考

        <div class="c-cards-panel">
          <div class="c-card-column" v-for="(item, itemKey) in 4" :key="itemKey">
            <div v-for="(el, elKey) in decks.base[item + 3]" :key="elKey">
              <div class="c-card c-cards-border c-card-position-absolute"
              v-for="(card, cardKey) in el" :key="cardKey" :class="{[cardKey + 1]: true}">
                <div class="num-wrapper" :id="card">
                  <span class="text-left-top">{{card | CardNumberFilter}}</span>
                  <span class="text-right-bottom">{{card | CardNumberFilter}}</span>
                  <img class="img-left-top">
                  <img class="img-right-bottom">
                </div>
              </div>
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
    deal() { // 預設三種發牌方式
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
    },
    changeCardStyle() { // 設定牌的樣式
      const baseArray = Array.from(new Array(52)).map((el, key) => key + 1);
      const basePositionArray = Array.from(new Array(7)).map((el, key) => key + 1);
      baseArray.forEach((el) => {
        const dom = document.getElementById(`${el}`);
        if (el >= 14 && el <= 26) {
          dom.style.color = '#f1697b';
        } else if (el >= 27 && el <= 39) {
          dom.style.color = '#f1697b';
        }
      });
      basePositionArray.forEach((el) => {
        const dom2 = [...document.getElementsByClassName(`${el}`)];
        dom2.forEach((item) => {
          item.style.top = `${Math.floor((Math.random() - 2) * 1000)}px`;
          setTimeout(() => {
            item.style.top = `${40 * (el - 1)}px`;
          }, (el) * 75);
        });
      });
    },
  },
  computed: {
    // 亂數產生牌
    shuffledCard() {
      const baseArray = Array.from(new Array(52)).map((el, key) => key + 1);
      // Fisher–Yates shuffle 演算法(打亂牌組)
      const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };
      return shuffle(baseArray);
    },
  },
  created() {
    this.deal();
  },
  mounted() {
    this.changeCardStyle();
  },
};
</script>

<style lang="scss">
</style>
