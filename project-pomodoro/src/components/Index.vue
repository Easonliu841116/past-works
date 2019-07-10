<template>
  <div>
    <div class="pomodoro-container page-index">
      <main>
        <div class="main-container">
          <!-- mission-input -->
          <form class="mission-input-container">
            <input class="mission-input" type="text" placeholder="ADD A NEW MISSION…" />
            <button class="btn-add-mission" @click.prevent>+</button>
          </form>
          <!-- countdown-number -->
          <div class="countdown-number">25:00</div>
          <!-- mission-list -->
          <ul class="mission-list-container">
            <li class="missions">
              <input
                class="mission-selector"
                id="mission-selector-1"
                name="mission-selector"
                type="checkbox"
              />
              <label class="mission-text" for="mission-selector-1">
                <span></span>
                THE SECOND THING TODAY
              </label>
              <a href="#" class="btn-start-count" @click.prevent></a>
            </li>
            <li class="missions">
              <input
                class="mission-selector"
                id="mission-selector-2"
                name="mission-selector"
                type="checkbox"
              />
              <label class="mission-text" for="mission-selector-2">
                <span></span>
                THE SECOND THING TODAY
              </label>
              <a href="#" class="btn-start-count" @click.prevent></a>
            </li>
            <li class="missions">
              <input
                class="mission-selector"
                id="mission-selector-3"
                name="mission-selector"
                type="checkbox"
              />
              <label class="mission-text" for="mission-selector-3">
                <span></span>
                THE SECOND THING TODAY
              </label>
              <a href="#" class="btn-start-count" @click.prevent></a>
            </li>
            <li>
              <router-link class="btn-link-primary" :to="{ name:'TodoList' }">
                MORE
              </router-link>
            </li>
          </ul>
          <!-- countdown-clock -->
          <div class="countdown-clock-container">
            <div class="clock-surface">
              <a href="#" @click.prevent class="btn-play"></a>
              <a href="#" @click.prevent class="btn-stop"></a>
            </div>
            <div class="clock-back"></div>
          </div>
        </div>
      </main>
      <aside>
        <div class="aside-container">
          <div class="menu-container">
            <ul class="btn-menu-group">
              <li>
                <router-link class="btn-menu btn-light-list"
                :to="{ name:'TodoList' }"></router-link>
              </li>
              <li>
                <router-link class="btn-menu btn-light-analytics"
                :to="{ name:'Analytics' }"></router-link>
              </li>
              <li>
                <router-link class="btn-menu btn-light-ringtone"
                :to="{ name:'Ringtone' }"></router-link>
              </li>
            </ul>
            <h1 class="logo">
              <a href="#" @click.prevent>POMODORO</a>
            </h1>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/custom.scss";
@import "../assets/scss/index.scss";
</style>
