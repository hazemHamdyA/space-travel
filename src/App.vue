<template>
  <TheNavigations />
  <router-view v-slot="{ Component }">
    <transition mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheNavigations from "./components/TheNavigations.vue";

export default {
  data() {
    return {};
  },
  components: { TheNavigations },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  background-color: rgb(0, 7, 17);
}
.v-enter-active,
.v-leave-active {
  transition: all 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
