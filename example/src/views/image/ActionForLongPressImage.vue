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
          <span class="code-panel__title">常用场景描述</span>
        </div>
        <p class="api-detail__desc">
          例如需要识别页面图片上的二维码，通用的交互都是需要长按图片，然后会弹出一个Action Sheet提示框，然后用户进行选择操作。但这里的长按需要调用者自行实现，并且需要把被长按的图片转换成base64作为传参。
        </p>
      </van-panel>

      <van-panel>
        <div slot="header" class="code-panel van-hairline--bottom">
          <span class="code-panel__title">待识别的图片</span>
        </div>
        <div id="image-box" style="user-select: none;" @click="longPressImage">
          <img width="100%" :src="options.imageUrl" alt="">
        </div>
      </van-panel>

       <p class="tips">请点击上方图片。</p>
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
import html2canvas from 'html2canvas';
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
    title: '长按图片弹出框',
    description: '弹出框包括识别 二维码，保存图片 等选项。',
    imageUrl: 'https://open.workplus.io/static/pics/j-6.png',
  };

  imagebase64 = '';

  /** life cycle */
  mounted() {
    sdk.header.setTitle(this.options.title);
  }

  /** method */
  private longPressImage(): void {
    // @ts-ignore
    const elm: any = document.getElementById('image-box');
    html2canvas(elm, {
       useCORS: true,
       logging: false,
    }).then((canvas: any) => {
        const base64 = canvas.toDataURL('image/png');
        this.imagebase64 = base64;
        const imageData = base64.split(';base64,')[1];
        sdk.image.actionForLongPressImage({
          imageData,
        });
      });
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
