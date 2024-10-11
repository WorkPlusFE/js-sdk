<template>
  <div>
    <div class="api-detail">
      <van-panel>
        <div slot="header" class="code-panel van-hairline--bottom">
          <span class="code-panel__title">接口描述</span>
        </div>
        <p class="api-detail__desc">{{ options.description }}</p>
      </van-panel>
      <van-field v-model="discussionId" label="群Id" placeholder="输入群ID" />
      <van-button v-if="discussionId" class="api-detail__exec" type="info" block @click="handleOpenChat">
        打开群聊天窗口
      </van-button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Prop, Watch,
} from 'vue-property-decorator';
import {
  Button, Panel, RadioGroup, Radio, Field,
} from 'vant';
import * as sdk from '../../../../dist';

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
    title: '打开群聊天页面',
    description: '通过"群组id"打开该群组的聊天页面，并且可以自定义发送应用所支持的消息。',
  };

  discussionId = '';

  /** life cycle */
  mounted() {
    sdk.header.setTitle(this.options.title);
  }


  private handleOpenChat(): void {
    if (this.discussionId !== null) {
      sdk.pc.session.openDiscussionById({
        discussionId: this.discussionId,
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/detail.scss';
</style>
