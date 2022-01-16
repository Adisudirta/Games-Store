<template>
  <div
    class="w-full min-h-[30vh] py-4 flex justify-center items-center bg-gray-900"
  >
    <div class="text-center">
      <img class="m-auto w-56" :src="srcImg" :alt="altImg" />
      <h2 class="text-3xl text-gray-300">{{ msg }}</h2>
      <span class="text-3xl">{{ emoticon }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageVue",
  props: {
    msg: String,
    srcImg: String,
    altImg: String,
    emoticon: String,
  },
};
</script>
