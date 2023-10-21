<template>
  <div
    class="flex gap-20 w-full lg:flex-col lg:items-center lg:justify-center lg:gap-10"
  >
    <div class="wrapper flex justify-center">
      <img :src="curTapObj.image" :alt="curTapObj.title" />
    </div>
    <div class="flex flex-col gap-8 w-fit lg:items-center lg:w-3/4">
      <ul
        class="text-[#D0D6F9] uppercase flex gap-16 text-xl font-thin tracking-wider lg:w-2/4 lg:text-base lg:gap-8 lg:tracking-normal"
      >
        <li v-for="(planet, i) in plantes" :key="i">
          <button
            :class="['uppercase', { active: curTap === planet }]"
            @click="setCurTap(planet)"
          >
            {{ planet }}
          </button>
        </li>
      </ul>
      <h2 class="text-white text-8xl uppercase lg:text-5xl">{{ curTap }}</h2>
      <p class="text-[#D0D6F9] w-4/6 text-lg lg:text-base lg:text-center">
        {{ curTapObj.descreption }}
      </p>
      <hr />
      <div class="text-white flex gap-44 uppercase text-center lg:gap-20">
        <div>
          <p class="text-xs">avg. distance</p>
          <p class="text-3xl lg:text-base">{{ curTapObj.distance }}</p>
        </div>
        <div>
          <p class="text-xs">est. travel time</p>
          <p class="text-3xl lg:text-base">{{ curTapObj.duration }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      plantes: ["moon", "mars", "europa", "titan"],
      curTap: "moon",
      info: [
        {
          title: "moon",
          descreption:
            "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
          distance: "384,400 KM",
          duration: "3 DAYS",
          image: "/destination/image-moon.png",
        },
        {
          title: "mars",
          descreption:
            "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
          distance: "225 MIL ",
          duration: "9 MONTHS",
          image: "/image-mars.png",
        },
        {
          title: "europa",
          descreption:
            "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
          distance: "628 MIL",
          duration: "3 YEARS",
          image: "/destination/image-europa.png",
        },
        {
          title: "titan",
          descreption:
            "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
          distance: "1.6 BIL",
          duration: "7 YEARS",
          image: "/destination/image-titan.png",
        },
      ],
    };
  },
  computed: {
    curTapObj() {
      return this.info.find((e) => e.title === this.curTap);
    },
  },
  methods: {
    setCurTap(nwTap) {
      this.curTap = nwTap;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  min-width: 28rem;
}
hr {
  color: rgba(255, 255, 255, 0.178);
  width: 70%;
}
ul {
  li {
    font-family: "Barlow Condensed";
  }
}
h2,
p {
  font-family: "Bellefair";
}

.active {
  border-bottom: 3px solid white;
  padding-bottom: 0.5rem;
}

@media (max-width: 1024px) {
  img {
    position: relative;
    width: 12rem;
  }
}
</style>
