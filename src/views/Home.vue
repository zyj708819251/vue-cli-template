<template>
  <div class="home">
    <topHeader></topHeader>
    <div class="container">
      <sliderBar></sliderBar>
      <rightCon></rightCon>
    </div>
  </div>
</template>

<script>
import topHeader from '@com/TopHeader/index.vue';
import sliderBar from '@com/SliderBar/index.vue';
import rightCon from '@com/Content/rightCon.vue';
export default {
  name: 'home',
  components: {
    topHeader,
    sliderBar,
    rightCon
  }
};
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  @include flex(column);
  .container {
    @include height(100%, 100px);
    @include flex;
  }
}
</style>
