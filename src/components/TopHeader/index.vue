<template>
  <div class="header">监控手段获得健康环境</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'TopHeader',
  computed: {
    // ...mapState(['user'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  height: 100px;
  background: bisque;
}
</style>
