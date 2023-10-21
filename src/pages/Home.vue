<template>
  <div class="continer pt-16 xl:flex-col xl:gap-7">
    <div class="text w-1/2 flex flex-col gap-5 xl:items-center lg:gap-6">
      <h1 class="text-3xl tracking-widest text-[#D0D6F9] uppercase lg:text-xl">
        So, you want to travel to
      </h1>
      <span class="text-white text-9xl uppercase tracking-widest lg:text-7xl">
        Space
      </span>
      <p class="text-[#D0D6F9] w-2/3 tracking-widest xl:text-center lg:text-sm">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
    <router-link
      to="/destinations"
      class="text-5xl text-[#0B0D17] bg-white rounded-full px-16 py-28 font-extralight cursor-pointer uppercase xl:text-3xl xl:px-10 xl:py-16 lg:px-6 lg:py-12"
      >Explore</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.continer {
  background-image: url("../../public/home/background-home-desktop.jpg");
  height: 100vh;
  display: flex;
  background-size: cover;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in;

  span {
    font-family: "Bellefair", serif;
  }
  a {
    outline-style: solid;
    outline-color: rgba(211, 211, 211, 0.616);
    outline-width: 0;
    transition: all 0.3s ease-in;
  }
  a:hover {
    outline-width: 3rem;
  }
}

@media (max-width: 767px) {
  .continer {
    background-image: url("/home/background-home-mobile.jpg");
  }
}
</style>
