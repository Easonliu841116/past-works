<template>
  <div>
    <form class="mission-input-container">
      <input class="mission-input" type="text" placeholder="ADD A NEW MISSION…" />
      <button class="btn-add-mission" @click.prevent>+</button>
    </form>
    <ul class="mission-list-container">
      <li class="mission-title">
        <span>TO-DO</span>
        <a href="#" @click.prevent class="btn-dropdown"></a>
      </li>
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
    </ul>
    <ul class="mission-list-container">
      <li class="mission-title">
        <span>DONE</span>
        <a href="#" @click.prevent class="btn-dropdown"></a>
      </li>
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
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/custom.scss";
@import "../assets/scss/todolist.scss";
</style>
