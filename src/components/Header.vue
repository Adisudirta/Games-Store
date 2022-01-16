<template>
  <header
    class="w-screen bg-gray-900 flex justify-between items-center fixed px-10 py-4 sm:px-20 md:px-28"
  >
    <router-link to="/" class="flex items-center gap-3">
      <img class="w-7" src="../assets/joystick.png" alt="logo" />
      <h1 class="font-bold text-gray-400 text-lg">GAMES STORE</h1>
    </router-link>

    <!-- Desktop -->
    <div class="hidden md:flex gap-5">
      <router-link to="/Category" class="text-gray-500 font-bold text-sm">
        Category
      </router-link>
      <router-link to="/Platform" class="text-gray-500 font-bold text-sm">
        Platform
      </router-link>
    </div>

    <!-- Mobile nav and Tablet nav -->
    <div
      class="absolute bg-gray-700 top-[15vh] p-10 flex flex-col justify-center items-center gap-5 w-3/4 rounded-md"
      :class="{ hidden: isHiden }"
    >
      <router-link to="/Category" class="text-gray-500 font-bold">
        Category
      </router-link>
      <router-link to="/Platform" class="text-gray-500 font-bold">
        Platform
      </router-link>
    </div>

    <!-- Toggle button -->
    <div
      class="transition-all ease-in text-white block md:hidden"
      :class="{ 'rotate-90': isRotate }"
      @click="handleToggle"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HeaderVue",
  setup() {
    let isHiden = ref(true);
    let isRotate = ref(false);

    function handleToggle() {
      isHiden.value = !isHiden.value;
      isRotate.value = !isRotate.value;
    }

    return {
      isHiden,
      isRotate,
      handleToggle,
    };
  },
};
</script>
