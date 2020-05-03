<template>
  <div id="app" v-click>
    <router-view/>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/close.less';
@import url('@/common/utils.less');

#app {
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
