<template>
  <AppLayout>
    <template #img>
      <img
        src="../../public/destination/background-destination-desktop.jpg"
        alt="bg"
      />
    </template>

    <template #default>01</template>

    <template #title>pick your destination</template>

    <template #component>
      <AppDestination />
    </template>
  </AppLayout>
</template>

<script>
import AppDestination from "../components/AppDestination.vue";

export default { components: { AppDestination } };
</script>

<style lang="scss" scoped>
@media (max-width: 1024px) {
  img {
    background-image: url("/destination/background-destination-mobile.jpg");
    background-size: cover;
    height: 150vh;
    width: 100vw;
  }
}
</style>
