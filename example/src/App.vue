<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import '@/style/_common.scss';
@import '@/style/json-viewer.scss';
$color-background: #f2f2f3;

#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  min-height: 100vh;
  display: block;
  background-color: $color-background;

  user-select: none;
}
</style>
