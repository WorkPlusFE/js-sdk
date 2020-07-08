<template>
  <div>
    <div class="api-detail">
      <van-panel>
        <div slot="header" class="code-panel van-hairline--bottom">
          <span class="code-panel__title">接口描述</span>
        </div>
        <p class="api-detail__desc">{{ description }}</p>
      </van-panel>

      <van-panel>
        <div slot="header" class="code-panel van-hairline--bottom">
          <span class="code-panel__title">示例代码</span>
          <span
            class="code-panel__action"
            v-clipboard:copy="code"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
          >
            复制
          </span>
        </div>
        <pre v-highlightjs="code"><code class="javascript"></code></pre>
      </van-panel>

      <van-panel v-if="res">
        <div slot="header" class="code-panel van-hairline--bottom">
          <span class="code-panel__title">执行结果</span>
          <span
            class="code-panel__action"
            v-clipboard:copy="res"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
          >
            复制
          </span>
        </div>
        <pre v-highlightjs="res"><code class="javascript"></code></pre>
      </van-panel>
      <van-button class="api-detail__exec" type="info" block @click="handleExec">
        点击运行
      </van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { Button, Field, Panel, Toast } from 'vant';
import * as sdk from '../../../dist/';
import config from '../api';

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
  options = {
    title: '',
    description: '',
    action: '',
    params: {},
  };
  res = '';

  /** life cycle */
  mounted() {
    this.setOptions(this.action);
    sdk.webview.title({ title: this.options.title });
  }

  /** method */
  private handleExec(): void {
    // @ts-ignore
    sdk[this.service][this.action]({
      ...this.args,
      success: (res: unknown) => {
        this.res = JSON.stringify(res, null, 4);
      },
      fail: (err: unknown) => {
        this.res = `调用失败：${err}`;
      },
    });
  }

  onCopy() {
    Toast('复制成功');
  }

  onError() {
    Toast('复制失败');
  }

  /** watch */

  @Watch('$route.params.action')
  setOptions(action: string) {
    const service = config.find(s => {
      return s.module === this.service;
    });
    if (!service) {
      this.options.title = '';
      this.options.description = '';
      this.options.params = {};
      this.options.action = action;
      return;
    }
    const options = service.apis.find(a => {
      return a.action === action;
    });
    if (options) {
      this.options = options;
    }
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

  get code(): string {
    const code =
      'w6s.' +
      this.service +
      '.' +
      this.action +
      '(' +
      this.argsStr +
      ')' +
      '\n' +
      '  .then(res => {' +
      '\n' +
      '    console.log(res);' +
      '\n' +
      '  })' +
      '\n' +
      '  .catch(err => {' +
      '\n' +
      '    console.log(err);' +
      '\n' +
      '  });';
    return code;
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
