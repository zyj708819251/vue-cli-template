<template>
  <div class="sliderBar">
    <el-menu :default-active='$route.path' class="el-menu-vertical-demo" :collapse="isCollapse">
      <el-submenu index="$route.path">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item index="/Home/Index1"><router-link tag="div" exact to="/Home/Index1">路由1</router-link></el-menu-item>
        <el-menu-item index="/Home/Index2"><router-link tag="div"  to="/Home/Index2">路由2</router-link></el-menu-item>
      </el-submenu>
    </el-menu>
    <div :class="['toggle', { active: isCollapse }]" @click="toggleSlider"></div>
  </div>
</template>

<script>
export default {
  name: 'SliderBar',
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    toggleSlider() {
      this.isCollapse = !this.isCollapse;
    }
  },
  mounted() {

    console.log(this.$route.path)

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sliderBar {
  position: relative;
  .el-menu {
    height: 100%;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu-item {
    &.is-active{
          outline: 0;
          background-color: #ecf5ff;
    }
  }
  .toggle {
    cursor: pointer;
    width: 60px;
    height: 60px;
    position: absolute;
    right: -60px;
    top: 50%;
    transform: translateY(-50%);
    background: red;
    &.active {
      background: blue;
    }
  }
}
</style>
