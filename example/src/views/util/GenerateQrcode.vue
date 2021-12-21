<template>
  <div>
    <div class="api-detail">
      <van-panel>
        <div slot="header" class="code-panel van-hairline--bottom">
          <span class="code-panel__title">接口描述</span>
        </div>
        <p class="api-detail__desc">{{ options.description }}</p>
      </van-panel>

      <van-panel v-if="imageBase64Source">
        <div slot="header" class="code-panel van-hairline--bottom">
          <span class="code-panel__title">二维码</span>
        </div>
        <div style="overflow: hidden;">
          <img width="100%" :src="imageBase64Source" alt="" />
        </div>
      </van-panel>

      <van-button class="api-detail__exec" type="info" block @click="generateQrcode">
        转换
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
    title: '生成二维码',
    description: '生成二维码',
  };

  imageBase64Source = '';

  /** life cycle */
  mounted() {
    sdk.header.setTitle(this.options.title);
  }

  /** method */
  private generateQrcode(): void {
    sdk.util
      .generateQrcode({
        content: '二维码内容', // 必填-二维码内容
        width: 200, // 选填-二维码宽度
        height: 200, // 选填-二维码高度
      })
      .then((res: any) => {
        const filePath = `data:image/png;base64,${res.result.content}`;
        this.imageBase64Source = filePath;
      });
  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/detail.scss';
</style>
