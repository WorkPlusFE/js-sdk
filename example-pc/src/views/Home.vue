<template>
  <div class="demo-pages">
    <div class="demo">
      <img class="demo__logo" src="@/assets/logo.png" />
      <h2 class="demo__title">WorkPlus PC JS-SDK 功能展示</h2>
      <p class="demo__desc">
        本应用只是对相关接口功能进行展示，具体的参数和说明详见<a href="https://open.workplus.io/js-sdk/overview/usage.html">官方开发文档</a>。
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
import * as sdk from '../../../dist';

@Component({
  name: 'Home',
  components: {
    ExampleList,
  },
  mounted() {
    console.log(`in PC platform: ${sdk.platform.isPC}`);
  },
})
export default class Home extends Vue {

}
</script>

<style lang="scss" scoped>
.demo-pages {
  padding: 0;
}

a {
  color: $color-extra-light-gray;
  &:hover {
    color: $color-primary;
    text-decoration: underline;
  }
}

.demo {
  text-align: center;
  padding: 10px 15px 20px 15px;
  background: linear-gradient(270deg, #6177BF 0%, #314481 61%);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 0;
  }

  &__logo {
    width: 75px;
    height: 75px;
    margin-top: 20px;
  }

  &__title {
    color: $color-white;
    font-weight: normal;
  }

  &__desc {
    color: $color-extra-light-gray;
    font-size: $font-size-small;
    line-height: 20px;
  }
}
</style>
