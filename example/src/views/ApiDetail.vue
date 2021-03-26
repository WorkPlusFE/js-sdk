<template>
  <div>
    <div class="api-detail">
      <van-panel>
        <div slot="header" class="code-panel van-hairline--bottom">
          <span class="code-panel__title">接口描述</span>
        </div>
        <p class="api-detail__desc">{{ description }}</p>
      </van-panel>

      <van-panel v-if="Object.keys(res).length > 0">
        <div slot="header" class="code-panel van-hairline--bottom">
          <span class="code-panel__title">返回数据</span>
          <span
            class="code-panel__action"
            v-clipboard:copy="copyValue"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
          >
          </span>
        </div>
        <json-viewer
          :value="res"
          :expand-depth=5
          boxed
        >
        </json-viewer>
      </van-panel>
      <van-button class="api-detail__exec" type="info" block @click="handleExec">
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
  Button, Field, Panel, Toast,
} from 'vant';
import * as sdk from '../../../dist';
import config from '../api';
import func from '../../../vue-temp/vue-editor-bridge';

@Component({
  name: 'ExampleList',
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [Panel.name]: Panel,
  },
})
export default class ExampleList extends Vue {
  /** props */

  /** data */
  actives = ['code'];

  copyValue = '';

  options = {
    title: '',
    description: '',
    action: '',
    params: {},
  };

  res: object = {};

  /** life cycle */
  mounted() {
    const init = () => {
      this.setOptions(this.action);
      sdk.header.setTitle(this.options.title);
    };

    if (typeof cordova === 'undefined') {
      sdk.init();
      init();
    } else {
      init();
    }
  }

  /** method */
  private handleExec(): void {
    console.log(this.args);

    // @ts-ignore
    sdk[this.service][this.action]({
      ...this.args,
      success: (res: any) => {
        console.log(res);
        this.res = res;
        console.log(this.res);
      },
      fail: (err: any) => {
        this.res = { message: `调用失败：${err}` };
        console.log(err);
      },
    });
  }

  onCopy() {
    Toast.success('复制成功');
  }

  onError() {
    Toast.fail('复制失败');
  }

  /** watch */

  @Watch('$route.params.action')
  setOptions(action: string) {
    const service = config.find(s => s.module === this.service);
    if (!service) {
      this.options.title = '';
      this.options.description = '';
      this.options.params = {};
      this.options.action = action;
      return;
    }
    const options = service.apis.find(a => a.action === action);
    if (options) {
      this.options = options;
    }
  }

  @Watch('res', { immediate: true })
  setCopyValue(result: object) {
    this.copyValue = JSON.stringify(result, null, 4);
  }

  /** computed */
  get service(): string {
    return this.$route.params.service;
  }

  get action(): string {
    return this.$route.params.action;
  }

  get description() {
    return this.options.description;
  }

  get args() {
    return this.options.params;
  }

  get argsStr() {
    return JSON.stringify(this.args || {}, null, 4);
  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/detail.scss';
</style>
