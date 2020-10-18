<template>
  <div>
    <div class="api-detail">
      <van-panel>
        <div slot="header" class="code-panel van-hairline--bottom">
          <span class="code-panel__title">接口描述</span>
        </div>
        <p class="api-detail__desc">{{ options.description }}</p>
      </van-panel>

      <van-button class="api-detail__exec" type="info" block @click="registerShakeListener">
        注册摇一摇
      </van-button>
      <van-button class="api-detail__exec" type="default" block @click="unregisterShakeListener">
        注销摇一摇
      </van-button>
      <p class="tips">请摇一摇手机，触发绑定事件。</p>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Prop, Watch,
} from 'vue-property-decorator';
import {
  Button, Panel, RadioGroup, Radio,
} from 'vant';
import * as sdk from '../../../../dist';
import config from '../../api';

@Component({
  name: 'ExampleList',
  components: {
    [Button.name]: Button,
    [Panel.name]: Panel,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
  },
})
export default class ExampleList extends Vue {
  /** props */

  /** data */
  options = {
    title: '摇一摇',
    description: '端需要实现 onWorkplusShake() 方法, 在该处执行自己的业务, 摇一摇后将在该方法回调。该方法必须为全局方法，并且方法名不可以转换。',
    params: {},
  };

  /** life cycle */
  mounted() {
    sdk.header.setTitle(this.options.title);
  }

  /** method */
  private registerShakeListener(): void {
    sdk.webview.registerShakeListener();
  }

  private unregisterShakeListener(): void {
    sdk.webview.unregisterShakeListener();
  }
}
</script>


<style lang="scss" scoped>
@import '~@/style/detail.scss';

.tips {
  text-align: center;
  font-size: 14px;
  color: $color-primary;
  margin: 20px 0;
}
</style>
