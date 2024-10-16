<template>
  <div id="app">
    <router-view v-if="isAuth" />
    <h1 v-else>初始化失败</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import initJssdk from '@/uitls/init-jssdk';
import { isInWorkPlusApp } from '@/uitls/tools';

@Component({
  name: 'App',
})
export default class extends Vue {
  public isAuth: boolean = true;

  created() {
    if (isInWorkPlusApp()) {
      this.initJssdk();
    }
  }

  async initJssdk() {
    const authMode = false;
    const result = await initJssdk.init(authMode);
    if (result && result.code === 0) {
      console.log('----- 成功初始 JSSDK -----');
      this.isAuth = true;
    } else {
      this.isAuth = false;
      console.log('----- 鉴权失败 JSSDK -----');
    }
  }
}
</script>

<style lang="scss">
@import '@/style/_common.scss';
@import '@/style/json-viewer.scss';
$color-background: #f2f2f3;

#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  min-height: 100vh;
  display: block;
  background-color: $color-background;

  user-select: none;
}
</style>
