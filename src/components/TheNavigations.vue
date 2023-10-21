<template>
  <nav id="nav" class="w-full flex items-center justify-between pt-8 pl-6">
    <router-link to="/">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <g fill="none" fill-rule="evenodd">
          <circle cx="24" cy="24" r="24" fill="#FFF" />
          <path
            fill="#0B0D17"
            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
          />
        </g>
      </svg>
    </router-link>

    <ul class="links font-light uppercase">
      <li>
        <router-link to="/"> <span> 00 </span> Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'destinations' }"
          ><span> 01 </span> Destinations</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'crew' }"><span> 02 </span> Crew</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'technology' }"
          ><span> 03 </span> Technology</router-link
        >
      </li>
    </ul>
    <NavigationsMobil />
  </nav>
</template>

<script>
import NavigationsMobil from "./NavigationsMobil.vue";

export default { components: { NavigationsMobil } };
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #fff;
  padding-bottom: 1.2rem;

  span {
    font-weight: 600;
    font-size: 1.2rem;
    margin-right: 3px;
  }

  &:hover {
    border-bottom: 2px solid white;
  }

  &.router-link-active {
    border-bottom: 2px solid white;
  }
}

#nav {
  position: absolute;

  .links {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    height: 4rem;
    background: rgba(66, 66, 66, 0.24);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6px);
  }
  @media (max-width: 1024px) {
    .links {
      display: none;
    }
  }
}
</style>
