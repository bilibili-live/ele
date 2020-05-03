<template>
  <div>
    <topbar />
    <router-view/>
  </div>
</template>

<script>
import topbar from '_c/topbar.vue'
export default {
  components: {
    topbar
  }
}
</script>

<style>

</style>