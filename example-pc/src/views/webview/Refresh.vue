<template>
  <div>
    <div class="api-detail">
      <van-panel>
        <div slot="header" class="code-panel van-hairline--bottom">
          <span class="code-panel__title">接口描述</span>
        </div>
        <p class="api-detail__desc">{{ options.description }}</p>
      </van-panel>
      <h4>状态</h4>
      <div class="state-text">{{ text }}</div>

      <van-button style="margin-top: 20px" type="info" block @click="endPullRefresh">关闭刷新</van-button>
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
  name: 'Refresh',
  components: {
    [Button.name]: Button,
    [Panel.name]: Panel,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
  },
})
export default class Refresh extends Vue {
  /** props */

  /** data */
  options = {
    title: '下拉刷新',
    description: '拖动下拉触发下拉刷新。',
    params: {},
  };

  text: string = '下拉配置：true';

  /** life cycle */
  mounted() {
    sdk.header.setTitle(this.options.title);
    this.configPullRefresh();
    this.onPullRefresh();
  }

  destroyed() {
    // 注销当前页面的下拉刷新
    sdk.webview.configPullRefresh({ enable: false, mode: 'default' });
  }

  // 开始下拉刷新配置
  configPullRefresh() {
    sdk.webview.configPullRefresh({
      enable: true,
      mode: 'default', // 选填-默认为default, default: 表示默认模式,支持手动滑动,也可以通过函数触发  trigger: 仅支持通过函数触发
      success: () => {
        console.log('configPullRefresh success');
      },
      fail: () => {
        console.log('configPullRefresh fail');
      },
    });
  }

  // 监听下拉属性
  onPullRefresh() {
    sdk.webview.onPullRefresh({
      success: () => {
        console.log('onPullRefresh success');
        this.text = '加载中...';
        setTimeout(() => {
          this.endPullRefresh();
        }, 3000);
      },
      fail: () => {
        this.endPullRefresh();
        console.log('onPullRefresh fail');
      },
    });
  }

  // 停止下拉刷新
  endPullRefresh() {
    sdk.webview.endPullRefresh({
      success: () => {
        console.log('endPullRefresh success');
        this.text = '加载完成';
      },
      fail: () => {
        console.log('endPullRefresh fail');
        this.text = '加载失败';
      },
    });
  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/detail.scss';
</style>
