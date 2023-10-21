<template>
  <AppLayout>
    <template #img>
      <img src="/crew/background-crew-desktop.jpg" alt="bg" />
    </template>
    <template #default>02</template>
    <template #title>meet your Crew</template>
    <template #component> <CrewsMates></CrewsMates> </template>
  </AppLayout>
</template>

<script>
import CrewsMates from "../components/CrewsMates.vue";
export default {
  components: {
    CrewsMates,
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 1024px) {
  img {
    background-image: url("/crew/background-crew-mobile.jpg");
    background-size: cover;
    height: 150vh;
    width: 100vw;
  }
}
</style>
