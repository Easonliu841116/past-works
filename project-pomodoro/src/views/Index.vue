<template>
  <div>
    <div class="pomodoro-container">
      <main>
        <div class="main-container">
          <!-- mission-input -->
          <form class="mission-input-container">
            <input class="mission-input" type="text" placeholder="ADD A NEW MISSION…">
            <button class="btn-add-mission" @click.prevent>+</button>
          </form>
          <!-- count-down-number -->
          <div class="count-down-number">25:00</div>
          <!-- mission-list -->
          <ul class="mission-list-container">
            <li class="missions">
              <input class="mission-selector" id="mission-selector-1"
              name="mission-selector" type="radio">
              <label class="mission-text" for="mission-selector-1">
                <span></span>
                THE SECOND THING TODAY
              </label>
              <a href="#" class="btn-start-count" @click.prevent></a>
            </li>
            <li class="missions">
              <input class="mission-selector" id="mission-selector-2"
              name="mission-selector" type="radio">
              <label class="mission-text" for="mission-selector-2">
                <span></span>
                THE SECOND THING TODAY
              </label>
              <a href="#" class="btn-start-count" @click.prevent></a>
            </li>
            <li class="missions">
              <input class="mission-selector" id="mission-selector-3"
              name="mission-selector" type="radio">
              <label class="mission-text" for="mission-selector-3">
                <span></span>
                THE SECOND THING TODAY
              </label>
              <a href="#" class="btn-start-count" @click.prevent></a>
            </li>
            <li><a href="#" class="btn-link-primary" @click.prevent>MORE</a></li>
          </ul>
          <!-- count-down-clock -->
          <div class="count-down-clock-container">
            <div class="clock-surface">
              <a href="#" @click.prevent class="btn-pause"></a>
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
                <a class="btn-menu btn-to-lists" href="#" @click.prevent></a>
              </li>
              <li>
                <a class="btn-menu btn-to-analysis" href="#" @click.prevent></a>
              </li>
              <li>
                <a class="btn-menu btn-to-ringtone" href="#" @click.prevent></a>
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
