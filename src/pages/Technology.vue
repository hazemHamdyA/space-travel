<template>
  <AppLayout>
    <template #img>
      <img
        src="../../public/technology/background-technology-desktop.jpg"
        alt="bg"
      />
    </template>
    <template #default> 03 </template>
    <template #title> space launch 101 </template>
    <template #component> <TechItems /> </template>
  </AppLayout>
</template>

<script>
import TechItems from "../components/TechItems.vue";
export default {
  components: {
    TechItems,
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 1024px) {
  img {
    background-image: url("/technology/background-technology-mobile.jpg");
    background-size: cover;
    height: 150vh;
    width: 100vw;
  }
}
</style>
