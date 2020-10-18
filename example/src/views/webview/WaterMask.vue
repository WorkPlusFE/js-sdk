<template>
  <div>
    <div class="api-detail">
      <van-panel>
        <div slot="header" class="code-panel van-hairline--bottom">
          <span class="code-panel__title">接口描述</span>
        </div>
        <p class="api-detail__desc">{{ options.description }}</p>
      </van-panel>

      <van-button class="api-detail__exec" type="info" block @click="handleAddWaterMask">
        添加水印
      </van-button>
      <van-button class="api-detail__exec" type="default" block @click="handleRemoveWaterMask">
        移除水印
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
  options = {
    title: '网页水印',
    description: '给页面添加或移除水印',
    params: {},
  };

  landscape = true;

  lock = false;

  /** life cycle */
  mounted() {
    sdk.header.setTitle(this.options.title);
  }

  /** method */
  private handleAddWaterMask(): void {
    sdk.webview.addWaterMask({
      textColor: '#666',
      alpha: 1.0,
      verticalPadding: 40,
      fontSize: 14,
    });
  }

  private handleRemoveWaterMask(): void {
    sdk.webview.removeWaterMask();
  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/detail.scss';
</style>
