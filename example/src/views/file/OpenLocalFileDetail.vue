<template>
  <div>
    <div class="api-detail">
      <van-panel>
        <div slot="header" class="code-panel van-hairline--bottom">
          <span class="code-panel__title">接口描述</span>
        </div>
        <p class="api-detail__desc">{{ options.description }}</p>
      </van-panel>

      <van-button class="api-detail__exec" type="info" block @click="handleSelectFile">
        1、选择文件
      </van-button>
      <van-button :disabled="!options.selected" class="api-detail__exec" type="info" block @click="handleOpenFile">
        2、打开文件详情
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
    title: '本地打开文件',
    description: '原生打开文件，pdf、excel、word 及 ppt 等。',
    params: {
      filePath: 'file.filePath',
    },
    selected: false,
  };

  /** life cycle */
  mounted() {
    sdk.header.setTitle(this.options.title);
  }

  private getFilePath(path: string): string {
    if (path.indexOf('file://') === 0) {
      return path.replace('file://', '');
    }
    return path;
  }

  /** method */
  private handleSelectFile(): void {
    sdk.file.chooseFiles({
      multiple: false,
    }).then((res: any) => {
      console.log(res);
      if (res) {
        const file = res.result[0];
        this.options.params = {
          filePath: this.getFilePath(file.filePath),
        };
        this.options.selected = true;
      }
    });
  }

  private handleOpenFile(): void {
    console.log(this.options.params);
    sdk.file.readFile({
      path: this.options.params.filePath,
    });
  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/detail.scss';
</style>
