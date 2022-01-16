<template>
  <div>
    <img :src="srcImg" :alt="title" />
    <div class="p-5 bg-gray-800">
      <h3 class="text-gray-300 text-lg">{{ title }}</h3>
      <p class="text-gray-400 text-[12px] mb-3">
        {{ desc }}
      </p>

      <div class="flex items-end gap-3">
        <div class="text-gray-200 rounded p-1 text-[12px] bg-sky-700">
          {{ category }}
        </div>
        <div class="text-gray-200 rounded p-1 text-[12px] bg-sky-500">
          {{ platform }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardVue",
  props: {
    srcImg: String,
    title: String,
    desc: String,
    category: String,
    platform: String,
  },
};
</script>
