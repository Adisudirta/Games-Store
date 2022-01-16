<template>
  <div
    class="flex flex-col gap-3 w-full bg-gray-900 px-10 py-4 sm:px-20 md:px-28"
  >
    <h2 class="text-center text-gray-300">{{ placeHolder }}</h2>
    <form @submit.prevent="search" class="flex justify-center gap-4">
      <input v-model="searchInput" class="rounded px-3 w-72" type="text" />
      <button
        type="submit"
        class="rounded bg-sky-900 text-gray-300 font-bold px-3"
      >
        Search &#128269;
      </button>
    </form>
    <p class="text-gray-500 text-center">{{ egMessage }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "SearchVue",
  props: {
    placeHolder: String,
    egMessage: String,
  },
  setup(props, context) {
    const searchInput = ref("");

    function search() {
      context.emit("search", searchInput.value);
    }

    return {
      searchInput,
      search,
    };
  },
};
</script>

<style></style>
