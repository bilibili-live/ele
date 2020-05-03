<template>
  <div v-if="topbar.show" :style="topStyle">
    <x-header
    :title="topbar.title"
    :backText="topbar.left"
    :style="{ backgroundColor: topbar.bg }"
    />
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  computed: {
    ...mapState(["topbar"])
  },
  data() {
    return {
      topStyle: {
        position: `fixed`,
        width: `100%`,
        zIndex: 1,
        height: `44px`
      }
    }
  }
}
</script>

<style>
</style>