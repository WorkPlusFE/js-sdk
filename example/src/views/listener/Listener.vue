<template>
  <div>
    <div class="api-detail">
      <van-panel>
        <div slot="header" class="code-panel van-hairline--bottom">
          <span class="code-panel__title">安卓物理返回按钮</span>
        </div>
        <p class="api-detail__desc">绑定安卓设备的物理返回按钮，绑定后，原始返回动作将无效。</p>
      </van-panel>
      <van-button class="api-detail__exec" type="info" block @click="handleBindBackButton">
        绑定安卓物理返回按钮事件
      </van-button>
      <br>
      <van-panel>
        <div slot="header" class="code-panel van-hairline--bottom">
          <span class="code-panel__title">页面离开</span>
        </div>
        <p class="api-detail__desc">当页面不可见时，WorkPlus 会产生回调，开发者可以监听此pause事件，并处理特定的业务逻辑。</p>
      </van-panel>
      <van-button class="api-detail__exec" type="info" block @click="handleBindPause">
        绑定页面离开事件
      </van-button>
      <br>
      <van-panel>
        <div slot="header" class="code-panel van-hairline--bottom">
          <span class="code-panel__title">页面返回</span>
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
  Button, Panel, RadioGroup, Radio, Toast,
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

  /** life cycle */
  mounted() {
    sdk.header.setTitle('页面事件绑定');
  }

  /** method */
  private handleBindBackButton(): void {
    sdk.event.bindBackButtonEvent(() => {
      alert('你点击了安卓的物理返回按钮！');
    });
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
