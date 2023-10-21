<template>
  <div class="flex lg:flex-col lg:items-center">
    <div
      class="w-1/2 flex flex-col gap-8 mt-10 lg:mt-64 lg:items-center lg:justify-center"
    >
      <h3 class="text-[#6c757d] text-4xl uppercase lg:text-center">
        {{ nwMate.title }}
      </h3>
      <h4 class="text-white text-6xl uppercase lg:text-center">
        {{ nwMate.name }}
      </h4>
      <p class="text-[#D0D6F9] w-4/6 text-lg lg:text-center">
        {{ nwMate.descreption }}
      </p>
      <ul class="flex gap-7 justify-center w-1/2">
        <li
          v-for="(mate, i) in crews"
          :key="i"
          :class="[
            'p-2 bg-[#6c757d] w-min rounded-full cursor-pointer',
            { active: curMate === mate.name },
          ]"
          @click="setMates(mate.name)"
        ></li>
      </ul>
    </div>
    <div class="flex lg:-order-1 lg:-ml-36">
      <img
        class="h-5/6 -mt-20 lg:mt-0 lg:h-2/6"
        :src="nwMate.img"
        alt="someOne"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curMate: "Douglas Hurley",
      crews: [
        {
          name: "Douglas Hurley",
          title: "commander",
          descreption:
            "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
          img: "/crew/image-douglas-hurley.png",
        },
        {
          name: "Anousheh Ansari",
          title: "Flight Engineer",
          descreption:
            "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
          img: "/crew/image-anousheh-ansari.png",
        },
        {
          name: "Victor Glover",
          title: "Pilot",
          descreption:
            "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a  station systems flight engineer",
          img: "/crew/image-victor-glover.png",
        },
        {
          name: "Mark Shuttleworth",
          title: "Mission Specialist",
          descreption:
            "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
          img: "/crew/image-mark-shuttleworth.png",
        },
      ],
    };
  },
  computed: {
    nwMate() {
      return this.crews.find((e) => e.name === this.curMate);
    },
  },
  methods: {
    setMates(nwMate) {
      this.curMate = nwMate;
    },
  },
};
</script>

<style lang="scss" scoped>
h3,
h4 {
  font-family: "Bellefair";
}
.active {
  background-color: #fff;
}
</style>
