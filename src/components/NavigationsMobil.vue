<template>
  <button
    class="hidden lg:block lg:mr-10 absolute right-0 z-10"
    v-if="!openMenu"
    @click="toggle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
      <g fill="#D0D6F9" fill-rule="evenodd">
        <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
      </g>
    </svg>
  </button>
  <button
    class="hidden lg:block lg:mr-10 absolute right-0 z-10"
    v-else
    @click="toggle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
      <g fill="#D0D6F9" fill-rule="evenodd">
        <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
        <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
      </g>
    </svg>
  </button>
  <ul class="linkss font-light uppercase" v-if="openMenu">
    <li>
      <button @click="openMenu = false">
        <router-link to="/"> <span> 00 </span> Home</router-link>
      </button>
    </li>
    <li>
      <button @click="openMenu = false">
        <router-link :to="{ name: 'destinations' }"
          ><span> 01 </span> Destinations</router-link
        >
      </button>
    </li>
    <li>
      <button @click="openMenu = false">
        <router-link :to="{ name: 'crew' }"><span> 02 </span> Crew</router-link>
      </button>
    </li>
    <li>
      <button @click="openMenu = false">
        <router-link :to="{ name: 'technology' }"
          ><span> 03 </span> Technology</router-link
        >
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      openMenu: false,
    };
  },
  methods: {
    toggle() {
      this.openMenu = !this.openMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  background: rgba(31, 30, 30, 0.24);
  box-shadow: 0 4px 30px rgba(63, 62, 62, 0.1);
  backdrop-filter: blur(6px);
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  font-size: 2rem;
  li {
    color: #fff;
    font-weight: 600;
  }
}

// @media (max-width: 1000px) {
//   .linkss {
//     display: none;
//   }
// }
</style>
