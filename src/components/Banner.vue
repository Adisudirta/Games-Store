<template>
  <div
    class="pt-[13vh] h-1/2 bg-red-700 bg-[url('./src/assets/banner-background.jpg')] bg-cover"
  >
    <div class="h-48 flex flex-col justify-center items-center gap-4">
      <h2 class="text-center font-bold text-gray-400 text-lg md:text-3xl">
        Let's find your <span class="text-blue-700">favorite</span> game
      </h2>
      <p class="font-bold text-gray-500 text-center text-sm">
        Find games and decide what games you will play tomorrow
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerVue",
};
</script>
