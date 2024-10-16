<template>
  <div>
    <div class="api-detail">
      <van-panel>
        <div slot="header" class="code-panel van-hairline--bottom">
          <span class="code-panel__title">接口描述</span>
        </div>
        <p class="api-detail__desc">{{ options.description }}</p>
      </van-panel>
      <van-button class="api-detail__exec" type="info" block @click="handleGetUser">
        1、选择人员
      </van-button>
      <van-button v-if="user" class="api-detail__exec" type="info" block @click="handleOpenChat">
        2、打开与"{{this.user.name}}"的聊天窗口
      </van-button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Prop, Watch,
} from 'vue-property-decorator';
import {
  Button, Panel, RadioGroup, Radio, Toast,
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
    title: '打开用户聊天页面',
    description: '传入userId、domianId，打开到 WorkPlus 与该用户的聊天页面。',
  };

  user = null;

  /** life cycle */
  mounted() {
    sdk.header.setTitle(this.options.title);
  }

  /** method */
  private handleGetUser(): void {
    sdk.contact.getSingleContact()
      .then((res: any) => {
        console.log(res);
        [this.user] = res.result;
      });
  }

  private handleOpenChat(): void {
    if (this.user !== null) {
      const user = this.user || { user_id: '', domain_id: '' };
      sdk.session.showUserChatViewByUser({
        userId: user.user_id,
        domainId: user.domain_id
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/detail.scss';
</style>
