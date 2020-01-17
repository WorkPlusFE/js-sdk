<template>
  <div class="demo-pages">
    <div class="demo">
      <img class="demo__logo" src="@/assets/logo.png" />
      <h2 class="demo__title">WorkPlus SDK 能力展示</h2>
      <p class="demo__desc">
        本应用只是对相关接口功能进行展示，具体的参数和说明，请以官方文档为准。带 *
        号的例子，需要添加额外的参数才可执行。注意：部分接口只能在特定的包内执行。
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

@Component({
  name: 'Home',
  components: {
    ExampleList,
  },
})
export default class Home extends Vue {
  /* data */
  /* life cycle */
  /* method */
}
</script>


<style lang="scss" scoped>
.demo-pages {
  padding: 20px;
}

.demo {
  text-align: center;

  &__logo {
    width: 120px;
    height: 120px;
    margin-top: 40px;
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
