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
          <span class="code-panel__title">粘贴文本</span>
        </div>
        <div class="params-settings">
          <van-field v-model="value" placeholder="请长按输入框" />
          <br>
        </div>
      </van-panel>
      <van-button class="api-detail__exec" type="info" block @click="copyText">
        点击运行
      </van-button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Prop, Watch,
} from 'vue-property-decorator';
import {
  Button, Panel, RadioGroup, Radio, Toast, Field,
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
    [Field.name]: Field,
  },
})
export default class ExampleList extends Vue {
  /** props */

  /** data */
  options = {
    title: '复制文本',
    description: '把文本内容复制到粘贴板中。',
  };

  /** life cycle */
  mounted() {
    sdk.header.setTitle(this.options.title);
  }

  /** method */
  private copyText(): void {
    sdk.util.copyText('WorkPlus 开放平台' + Date.now());
    Toast.success('复制成功');
  }
}
</script>
