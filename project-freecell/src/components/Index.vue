<template>
  <div>
    <div class="c-cover-container">
      <div class="c-enter-panel mx-auto">
        <div class="c-cover-logo-secondary"></div>
        <h1 class="c-cover-logo mt-4 mb-5"></h1>
        <button class="c-btn-enter" @click="startGame">開始遊戲</button>
      </div>
    </div>
    <div class="c-main-container">
      <div class="c-main-wrapper mx-auto">
        <div class="c-main-logo">
          <h2>Freecell</h2>
        </div>
        <div class="c-settings-container">
          <a href="#" @click.prevent class="c-setting c-bg-reset">重玩</a>
          <a href="#" @click.prevent class="c-setting c-bg-pre_step">上一步</a>
          <a href="#" @click.prevent class="c-setting c-bg-pause">暫停</a>
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
                v-for="(card, cardKey) in el" :key="cardKey"
                  :class="{[cardKey + 1]: true}" :id="card">
                </div>
              </div>
            </div>
          </div>
          <div class="c-cards-panel">
            <div class="c-card-column" v-for="(item, itemKey) in 4" :key="itemKey">
              <div v-for="(el, elKey) in decks.base[item + 3]" :key="elKey">
                <div class="c-card c-cards-border c-card-position-absolute"
                v-for="(card, cardKey) in el" :key="cardKey"
                  :class="{[cardKey + 1]: true}" :id="card">
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
import $ from 'jquery';
import 'jquery-ui';

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
      let suit = '';
      let src = '';
      baseArray.forEach((el) => {
        const dom = document.getElementById(`${el}`);
        if (el <= 13) {
          suit = 'spade';
        } else if (el >= 14 && el <= 26) {
          suit = 'heart';
        } else if (el >= 27 && el <= 39) {
          suit = 'diamond';
        } else {
          suit = 'club';
        }
        // eslint-disable-next-line
        src = require(`../assets/images/${suit}${el % 13}.png`);
        dom.style.backgroundImage = `url(${src})`;
        dom.style.backgroundSize = '90%';
        dom.style.backgroundPosition = 'center center';
        dom.style.backgroundRepeat = 'no-repeat';
      });
      basePositionArray.forEach((el) => {
        const dom2 = [...document.getElementsByClassName(`${el}`)];
        dom2.forEach((item) => {
          setTimeout(() => {
            item.style.top = `${35 * (el - 1)}px`;
          }, (el) * 150);
          setTimeout(() => {
            item.style.transition = 'none';
            $('.c-card').draggable({
              containment: '.c-main-container',
              snap: '.c-card-column',
            });
          }, 1500);
        });
      });
    },
    startGame() {
      const vm = this;
      const cover = document.querySelector('.c-cover-container');
      const main = document.querySelector('.c-main-container');
      cover.style.top = '-1000px';
      cover.style.left = '-1000px';
      setTimeout(() => {
        main.style.top = '50%';
        main.style.left = '50%';
      }, 750);
      setTimeout(() => {
        vm.deal();
      }, 1000);
      setTimeout(() => {
        vm.changeCardStyle();
      }, 1300);
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
};
</script>

<style lang="scss">
</style>
