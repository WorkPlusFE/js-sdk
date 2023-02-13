<template>
  <div>
    <div class="api-detail">
      <van-panel>
        <div slot="header" class="code-panel van-hairline--bottom">
          <span class="code-panel__title">通用事件绑定 <van-tag type="success">推荐使用</van-tag></span>
        </div>
        <p class="api-detail__desc">调用后，将会监听“物理返回按钮（iOS为侧滑）”、“页面可见”及“页面离开”事件，并触发回调。</p>
      </van-panel>
      <van-button class="api-detail__exec" type="info" block @click="handleBindMessageChannel">
        绑定通用事件
      </van-button>
      <br>
      <van-panel>
        <div slot="header" class="code-panel van-hairline--bottom">
          <span class="code-panel__title">物理返回事件 <van-tag color="#ffe1e1" text-color="#ad0000">即将废弃</van-tag></span>
        </div>
        <p class="api-detail__desc">绑定安卓设备的物理返回按钮（iOS为侧滑），绑定后，原始返回动作将无效。而取消绑定后，即会恢复原始的物理返回行为。</p>
      </van-panel>
      <van-button class="api-detail__exec" type="info" block @click="handleBindBackButton">
        绑定物理返回事件
      </van-button>
      <van-button class="api-detail__exec" type="info" block @click="handleUnBindBackButton">
        解除物理返回事件
      </van-button>
      <br>
      <van-panel>
        <div slot="header" class="code-panel van-hairline--bottom">
          <span class="code-panel__title">页面离开 <van-tag color="#ffe1e1" text-color="#ad0000">即将废弃</van-tag></span>
        </div>
        <p class="api-detail__desc">当页面不可见时，WorkPlus 会产生回调，开发者可以监听此pause事件，并处理特定的业务逻辑。</p>
      </van-panel>
      <van-button class="api-detail__exec" type="info" block @click="handleBindPause">
        绑定页面离开事件
      </van-button>
      <br>
      <van-panel>
        <div slot="header" class="code-panel van-hairline--bottom">
          <span class="code-panel__title">页面返回 <van-tag color="#ffe1e1" text-color="#ad0000">即将废弃</van-tag></span>
        </div>
        <p class="api-detail__desc">当页面重新可见并可交互时，WorkPlus 会产生回调，开发者可监听此resume事件，并处理特定的业务逻辑。</p>
      </van-panel>
      <van-button class="api-detail__exec" type="info" block @click="handleBindResume">
        绑定页面返回事件
      </van-button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Prop, Watch,
} from 'vue-property-decorator';
import {
  Button, Panel, RadioGroup, Radio, Tag,
} from 'vant';
import * as sdk from '../../../../dist';

@Component({
  name: 'ExampleList',
  components: {
    [Button.name]: Button,
    [Panel.name]: Panel,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
    [Tag.name]: Tag,
  },
})
export default class ExampleList extends Vue {
  /** props */

  /** life cycle */
  mounted() {
    sdk.header.setTitle('页面事件绑定');
  }

  /** method */
  private handleBindMessageChannel(): void {
    sdk.event.bindMessageChannel((result: any) => {
      console.log('result =', result);
      /** 返回的事件类型 */
      // action: 'pause' | 'resume' | 'back';
      switch (result.action) {
        case 'pause':
          alert('页面离开');
          break;
        case 'resume':
          alert('页面返回');
          break;
        case 'back':
          alert('触发了物理返回事件');
          break;
        default:
          break;
      }
    });
  }

  private handleBindBackButton(): void {
    sdk.event.bindBackButtonEvent(() => {
      alert('触发了物理返回事件');
    });
  }

  private handleUnBindBackButton(): void {
    sdk.event.unbindBackButtonEvent();
  }

  private handleBindPause(): void {
    sdk.event.bindPauseEvent(() => {
      alert('页面离开');
    });
  }

  private handleBindResume(): void {
    sdk.event.bindResumeEvent(() => {
      alert('页面返回');
    });
  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/detail.scss';
</style>
