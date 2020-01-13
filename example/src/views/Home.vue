<template>
  <div class="demo">
    <h3>sdk Demo</h3>
    <example-list></example-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ExampleList from '@/components/ExampleList.vue';

@Component({
  name: 'Home',
  components: {
    ExampleList,
  },
})
export default class Home extends Vue {
  /* data */

  /* life cycle */

  /* method */

}

</script>


<style lang="scss" scoped>
.demo {
  min-height: 100vh;
  overflow: hidden;
  background: #f2f2f3;
}
</style>
