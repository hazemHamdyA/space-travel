<template>
  <div class="flex gap-12 lg:flex-col lg:items-center">
    <div
      class="flex w-1/2 gap-10 justify-center mt-24 lg:mt-52 lg:flex-col lg:items-center"
    >
      <div class="flex flex-col gap-8 lg:flex-row lg:mt-52">
        <span
          v-for="(tech, i) in techs"
          :key="i"
          class="px-8 py-5 rounded-full bg-transparent border-4 border-sky-500 text-3xl cursor-pointer"
          :class="{ active: curTech === tech.name }"
          @click="setTech(tech.name)"
          >{{ i + 1 }}</span
        >
      </div>
      <div class="flex flex-col gap-6 lg:text-center">
        <h3 class="text-[#6c757d] text-base uppercase">The terminology...</h3>
        <h4 class="text-white text-6xl uppercase">{{ curTechs.name }}</h4>
        <p class="text-[#D0D6F9] text-lg">
          {{ curTechs.description }}
        </p>
      </div>
    </div>
    <div class="lg:flex lg:-order-1">
      <img
        class="lg:w-5/12 lg:-ml-52 md:w-8/12 sm:w-full"
        :src="curTechs.img"
        alt="bg"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curTech: "vehicle portrait",
      techs: [
        {
          name: "vehicle portrait",
          description:
            "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful inoperation. Standing 150 metres tall, it's quite an awe-inspiring sighton the launching pad!",
          img: "/technology/image-launch-vehicle-portrait.jpg",
        },
        {
          name: "Space capsule",
          description:
            "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
          img: "/technology/image-space-capsule-portrait.jpg",
        },
        {
          name: "Spaceport",
          description:
            "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
          img: "/technology/image-spaceport-portrait.jpg",
        },
      ],
    };
  },
  computed: {
    curTechs() {
      return this.techs.find((e) => e.name === this.curTech);
    },
  },
  methods: {
    setTech(nwTech) {
      this.curTech = nwTech;
    },
  },
};
</script>

<style lang="scss" scoped>
.active {
  background-color: white;
  color: #000;
  transition: all 0.4s ease-in;
}
</style>
