<template>
  <div>
    <div class="api-detail">
      <van-panel>
        <div slot="header" class="code-panel van-hairline--bottom">
          <span class="code-panel__title">接口描述</span>
        </div>
        <p class="api-detail__desc">{{ options.description }}</p>
      </van-panel>

      <van-panel>
        <div slot="header" class="code-panel van-hairline--bottom">
          <span class="code-panel__title">参数设置</span>
        </div>
        <div class="params-settings">
          <p>设置屏幕方向：</p>
          <van-radio-group v-model="landscape">
            <van-radio :name="true">横屏</van-radio>
            <van-radio :name="false">竖屏</van-radio>
          </van-radio-group>
          <p>是否锁定：</p>
          <van-radio-group v-model="lock">
            <van-radio :name="true">锁定</van-radio>
            <van-radio :name="false">不锁定</van-radio>
          </van-radio-group>
        </div>
      </van-panel>

      <van-button class="api-detail__exec" type="info" block @click="handleExec">
        点击运行
      </van-button>
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
  actives = ['code'];

  options = {
    title: '控制屏幕旋转',
    description: '根据参数控制屏幕横屏显示或者竖屏显示。',
    params: {},
  };

  landscape = true;

  lock = false;

  /** life cycle */
  mounted() {
    sdk.header.setTitle(this.options.title);
  }

  /** method */
  private handleExec(): void {
    sdk.webview.changeOrientation({
      landscape: this.landscape,
      lock: this.lock,
    });
  }
}
</script>

<style lang="scss">
.api-detail {
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
</style>
