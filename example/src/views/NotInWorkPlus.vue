<template>
  <div class="not-in-workplus">
    <img src="@/assets/workplus.png" alt="">
    <h3>请使用 WorkPlus 访问应用！</h3>
  </div>
</template>

<script>
export default {
  name: 'NotInWorkplus',
};
</script>

<style lang="scss" scoped>
.not-in-workplus {
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 30%;
    -webkit-filter: grayscale(1); /* Webkit */
    filter: gray; /* IE6-9 */
    filter: grayscale(1); /* W3C */
  }
  h3 {
    padding: 10px 0;
  }
}
</style>
