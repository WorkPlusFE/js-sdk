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
          <span class="code-panel__title">添加水印后的图片</span>
        </div>
        <div style="overflow: hidden;">
          <img width="100%" :src="imageBase64Source" alt="">
        </div>
      </van-panel>

      <van-button class="api-detail__exec" type="info" block @click="toBase64">
        拍照后，图片将显示在页面上
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
    title: '图片添加水印',
    description: '调起手机相册进行拍照，生成水印图片并返回，水印会在左下角生成。',
  };

  imageBase64Source = '';

  /** life cycle */
  mounted() {
    sdk.header.setTitle(this.options.title);
  }

  /** method */
  private toBase64(): void {
    sdk.image.takePhotoAndAddWaterMark({
      content: 'WorkPlus',
      fontSize: 30,
      color: '#333333',
      markDisable: false,
      timeEnable: true,
      locationEnable: true,
    }).then((res: any) => {
      const filePath = res.result.imageURL;
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
