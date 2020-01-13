<template>
  <div class="example_list">
    <div
      v-for="category in sdkConfig"
      :key="category.name"
      class="category_item"
    >
      <van-cell
        :title="category.name"
        is-link
        :arrow-direction="category.showApi ? 'down' : ''"
        @click="toggleShowApi(category)"
      ></van-cell>
      <div class="api_list" v-if="category.showApi">
        <van-cell-group>
          <van-cell
            v-for="api in category.api"
            :key="api.name"
            :title="api.name"
            @click="toExecPage(category, api)"
          ></van-cell>
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Cell, CellGroup } from 'vant';
import * as sdk from '@w6s/sdk';
import config from '@/config/config';

@Component({
  name: 'ExampleList',
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
  },
})
export default class ExampleList extends Vue {
  /* data */
  private sdkConfig = config

  /* life cycle */

  /* method */
  private toggleShowApi(category: Common.PlainObject) {
    // eslint-disable-next-line no-param-reassign
    category.showApi = !category.showApi;
  }

  private toExecPage(category: Common.PlainObject, api: Common.PlainObject) {
    this.$router.push({
      path: '/api',
      query: {
        category: category.name,
        api: api.api_key,
        params: api.params,
      },
    });
  }
}

</script>


<style lang="scss" scoped>
.example_list {
  .category_item {
    margin-bottom: 10px;
  }
}
</style>
