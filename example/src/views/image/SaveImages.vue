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
