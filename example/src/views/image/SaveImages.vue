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
          <span class="code-panel__title">待保存的图片</span>
        </div>
        <div style="overflow: hidden;">
          <img width="100%" :src="options.imageUrl" alt="">
        </div>
      </van-panel>

      <van-button class="api-detail__exec" type="info" block @click="saveImages">
        保存上方图片到手机
      </van-button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Prop, Watch,
} from 'vue-property-decorator';
import {
  Button, Panel, Toast, RadioGroup, Radio,
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
    title: '图片保存',
    description: '传入图片地址，保存到手机本地。',
    imageUrl: 'https://open.workplus.io/static/pics/j-5.jpg',
  };

  /** life cycle */
  mounted() {
    sdk.header.setTitle(this.options.title);
  }

  /** method */
  private saveImages(): void {
    sdk.image.saveImages({
      url: this.options.imageUrl,
    }).then((res: any) => {
      Toast({ type: 'success', message: res.result.message });
    });
  }
}
</script>
