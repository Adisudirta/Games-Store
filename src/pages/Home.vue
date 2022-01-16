<template>
  <HeaderVue></HeaderVue>
  <BannerVue></BannerVue>
  <MessageVue
    v-if="isError"
    srcImg="./src/assets/error-icon.png"
    altImg="error-icon"
    :msg="errorMsg"
    emoticon="&#128546;"
  ></MessageVue>
  <section
    v-if="games.length !== 0 && isError === false"
    class="w-full min-h-screen bg-gray-900 px-10 py-10 sm:px-20 md:px-28"
  >
    <h2 class="font-bold text-gray-400 mb-10">
      Maybe you like the game below &#129321;
    </h2>
    <div
      class="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <CardVue
        v-for="game in games"
        :key="game.id"
        :srcImg="game.thumbnail"
        :title="game.title"
        :desc="game.short_description"
        :category="game.genre"
        :platform="game.platform"
      ></CardVue>
    </div>
  </section>
  <section class="bg-gray-900 px-10 py-4 sm:px-20 md:px-56">
    <div
      class="rounded-lg p-10 bg-[url('./src/assets/motivated-vergil.jpg')] bg-cover bg-center text-center flex flex-col gap-5"
    >
      <h2 class="text-3xl font-bold text-gray-100">
        Nothing is interesting? &#129300;
      </h2>
      <p class="text-lg font-bold text-gray-400">
        Still haven't found the game you want? Let's find your fun game based
        on:
      </p>
      <div class="text-gray-100 items-center flex justify-center gap-3">
        <button class="rounded font-bold px-2 py-1 bg-sky-700">
          <router-link to="/Category">By Category</router-link>
        </button>

        <span class="text-gray-400">Or</span>

        <button class="rounded font-bold px-2 py-1 bg-sky-500">
          <router-link to="/Platform">By Platform</router-link>
        </button>
      </div>
    </div>
  </section>
  <FooterVue></FooterVue>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

import HeaderVue from "../components/Header.vue";
import BannerVue from "../components/Banner.vue";
import CardVue from "../components/Card.vue";
import FooterVue from "../components/Footer.vue";
import MessageVue from "../components/Message.vue";

export default {
  name: "HomeVUe",
  components: {
    HeaderVue,
    BannerVue,
    CardVue,
    FooterVue,
    MessageVue,
  },
  setup() {
    const games = ref([]);
    const isError = ref(false);

    axios
      .request({
        method: "GET",
        url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
        headers: {
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "x-rapidapi-key":
            "ea3093d472msh6c90fc42a3fa0f0p105117jsn5a10aadec347",
        },
      })
      .then((res) => {
        console.log(res.data.slice(0, 8));
        games.value = res.data.slice(0, 8);
      })
      .catch((err) => {
        isError.value = true;
      });

    return {
      games,
      isError,
    };
  },
};
</script>
