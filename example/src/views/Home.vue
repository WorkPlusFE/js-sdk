<template>
  <div class="demo-pages">
    <div class="demo">
      <img class="demo__logo" src="@/assets/logo.png" />
      <h2 class="demo__title">WorkPlus JS-SDK 功能展示</h2>
      <p class="demo__desc">
        本应用只是对相关接口功能进行展示，具体的参数和说明详见官方 <a href="javascript:;">开发文档</a>。
      </p>
    </div>
    <div class="demo-example">
      <example-list></example-list>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ExampleList from '@/components/ExampleList.vue';
import * as sdk from '../../../dist/';

@Component({
  name: 'Home',
  components: {
    ExampleList,
  },
})
export default class Home extends Vue {
  beforeMount() {
    sdk.webview.title({ title: 'WorkPlus JS-SDK' });
  }
}
</script>


<style lang="scss" scoped>
.demo-pages {
  padding: 15px;
}

a {
  color: $color-primary;
}

.demo {
  text-align: center;
  padding-bottom: 10px;

  h2 {
    margin-bottom: 0;
  }

  &__logo {
    width: 100px;
    height: 100px;
    margin-top: 30px;
  }

  &__title {
    color: $color-primary;
  }

  &__desc {
    color: $color-gray;
    font-size: $font-size-small;
    line-height: 20px;
  }
}
</style>
