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
          <span class="code-panel__title">为什么需要转成 Base64？</span>
        </div>
        <p class="api-detail__desc">
          通常我们通过拍照或者打开相册来获取图片，而图片的访问地址都是本地绝对路径，基于 Webview 的安全机制，本地路径放到 IMG 标签的 src 里，并不能显示出来，此时可以通过该方法把图片转换成 Base64 来使用。
        </p>
      </van-panel>

      <van-panel v-if="imageBase64Source">
        <div slot="header" class="code-panel van-hairline--bottom">
          <span class="code-panel__title">转换成 Base64</span>
        </div>
        <div style="overflow: hidden;">
          <img width="100%" :src="imageBase64Source" alt="">
        </div>
      </van-panel>

      <van-button class="api-detail__exec" type="info" block @click="toBase64">
        选择照片后，图片将显示在页面上
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
    title: '转 Base64',
    description: '将本地图片转换成 Base64 字符串。',
  };

  imageBase64Source = '';

  /** life cycle */
  mounted() {
    sdk.header.setTitle(this.options.title);
  }

  /** method */
  private toBase64(): void {
    sdk.image.chooseImages({
      multiple: false,
    }).then((res: any) => {
      const filePath = typeof res.result === 'object' ? res.result.imageURL : res.result[0].imageURL;

      sdk.image.toBase64({ filePath })
        .then((res: any) => {
          const source = res.target._result;
          this.imageBase64Source = source;
        });
    });
  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/detail.scss';
</style>
