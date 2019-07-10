<template>
  <div>
    <div class="pomodoro-container page-menu">
      <main>
        <div class="main-container">
          <ul class="menu-list-group">
            <li>
              <router-link to="/" class="btn-link">
                <span class="btn-muted-list"></span>
                &nbsp;TO-DO LIST
              </router-link>
            </li>
            <li>
              <router-link to="/" class="btn-link">
                <span class="btn-muted-analytics"></span>
                &nbsp;ANALYTICS
              </router-link>
            </li>
            <li>
              <router-link to="/" class="btn-link">
                <span class="btn-muted-ringtone"></span>
                &nbsp;RINGTONES
              </router-link>
            </li>
          </ul>
          <div class="countdown-clock-container">
            <ul class="countdown-clock-wrapper">
              <li>
                <div class="btn-play-bg">
                  <div class="btn-play-container">
                    <router-link class="btn-light-play" to="/"></router-link>
                  </div>
                </div>
              </li>
              <li class="countdown-number">25:00</li>
              <li class="mission-text">THE SECOND THING TODAY</li>
            </ul>
          </div>
        </div>
      </main>
      <router-view class="menu-view"/>
      <aside>
        <div class="aside-container">
          <div class="btn-back">
            <a href="#" @click.prevent>×</a>
          </div>
          <div class="logo">
            <a href="#" @click.prevent>POMODORO</a>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/custom.scss";
@import "../assets/scss/menu.scss";
</style>
