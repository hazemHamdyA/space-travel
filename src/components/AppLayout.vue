<template>
  <div class="transition">
    <slot name="img"></slot>
    <div
      class="comtiner flex flex-col justify-center gap-10 pl-52 lg:items-center lg:justify-center lg:pl-0"
    >
      <h1 class="uppercase text-white text-3xl mt-28">
        <span class="font-thin mr-3">
          <slot></slot>
        </span>
        <slot name="title"></slot>
      </h1>
      <slot name="component"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
img {
  z-index: -1;
  position: absolute;
}
.comtiner {
  font-family: "Barlow";

  & span {
    font-weight: 400;
    color: rgba(255, 255, 255, 0.753);
  }
}
.transition {
  transition: all 0.3s ease-in;
}
</style>
