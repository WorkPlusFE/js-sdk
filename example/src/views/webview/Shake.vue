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

  landscape = true;
  lock = false;

  /** life cycle */
  mounted() {
    sdk.header.setTitle(this.options.title);
  }

  /** method */
  private registerShakeListener(): void {
    alert('registerShakeListener')
    sdk.webview.registerShakeListener();
  }

  private unregisterShakeListener(): void {
    sdk.webview.unregisterShakeListener();
  }
}
</script>


<style lang="scss" scoped>
.api-detail {
  position: relative;
  padding: 15px;
  height: inherit;

  &__desc {
    padding: 0 16px;
    line-height: 20px;
    color: $color-desc;
    font-size: $font-size-small;
  }

  .params-settings {
    padding: 0 16px 16px;
    font-size: 14px;
    p {
      color: #999;
    }
  }

  .van-radio-group {
    display: flex;
    .van-radio {
      padding-right: 30px;
    }
  }
}

.code-panel {
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  font-size: $font-size-small;
  line-height: 24px;

  &__title {
    color: $color-black;
    font-weight: bold;
    font-size: 16px;
  }

  &__action {
    color: $color-primary;
  }
}

.api-detail__exec {
  margin-top: 15px;
}

.api-detail__code-format {
  // margin: 0;
}

.van-panel + .van-panel {
  margin-top: 15px;
}

.van-panel__content {
  overflow: auto;
}

.tips {
  text-align: center;
  font-size: 14px;
  color: $color-primary;
  margin: 20px 0;
}
</style>
