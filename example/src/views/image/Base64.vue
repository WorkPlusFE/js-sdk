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
      const filePath = res.result.imageURL;
      sdk.image.toBase64({ filePath })
        .then((res: any) => {
          const source = res.target._result;
          this.imageBase64Source = source;
        })
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
</style>
