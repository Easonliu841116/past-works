<template>
  <div>
    <div class="analytics-number-container">
      <div class="analytics-number-title">
        FOCUS TIME
      </div>
      <div class="analytics-data-container">
        <ul>
          <li class="analytics-data-title">TODAY</li>
          <li>
            <span class="analytics-data-qty">{{pomodoroQty}}</span>
            <span class="analytics-data-unit">/TOMATO</span>
          </li>
        </ul>
        <ul>
          <li class="analytics-data-title">WEEK</li>
          <li>
            <span class="analytics-data-qty">{{pomodoroQty}}</span>
            <span class="analytics-data-unit">/TOMATO</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="analytics-chart-container">
      <ul class="analytics-chart-title-container font-color-muted">
        <li class="analytics-chart-title">CHART</li>
        <!-- do later -->
        <!-- <li class="chart-date">
          <a href="#" class="btn-prev-date btn-switch" @click.prevent></a>
          <a href="#" class="calendar" @click.prevent>2019.7.1 - 2019.7.7</a>
          <a href="#" class="btn-next-date btn-switch" @click.prevent></a>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';

export default {
  computed: {
    ...mapFields([
      'pomodoroQty',
    ]),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/custom.scss";
@import "../assets/scss/analytics.scss";
</style>
