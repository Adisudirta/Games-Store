<template>
  <HeaderVue></HeaderVue>
  <BannerVue></BannerVue>
  <SearchVue
    placeHolder="Search your game base on Platform"
    egMessage="Insert platform, eg: pc, browser or all"
    @search="getSearchValue"
  ></SearchVue>
  <MessageVue
    v-if="games.length === 0 && isError === false"
    srcImg="./doge.png"
    altImg="error-icon"
    msg="Your search results will be displayed here"
    emoticon="&#128270;"
  ></MessageVue>
  <MessageVue
    v-if="isError"
    srcImg="./error-icon.png"
    altImg="error-icon"
    :msg="errorMsg"
    emoticon="&#128546;"
  ></MessageVue>

  <section
    v-if="games.length !== 0 && isError === false"
    class="w-full min-h-screen bg-gray-900 px-10 py-10 sm:px-20 md:px-28"
  >
    <h2 class="font-bold text-gray-400 mb-10">
      Here are your search results &#10024;
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
  <FooterVue></FooterVue>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

import HeaderVue from "../components/Header.vue";
import BannerVue from "../components/Banner.vue";
import SearchVue from "../components/Search.vue";
import MessageVue from "../components/Message.vue";
import CardVue from "../components/Card.vue";
import FooterVue from "../components/Footer.vue";

export default {
  name: "PlatformVue",
  components: {
    HeaderVue,
    BannerVue,
    SearchVue,
    MessageVue,
    CardVue,
    FooterVue,
  },
  setup() {
    const games = ref([]);
    const isError = ref(false);
    const errorMsg = ref("");

    function getSearchValue(val) {
      console.log(val);
      axios
        .request({
          method: "GET",
          url: `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${val}`,
          headers: {
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
            "x-rapidapi-key":
              "ea3093d472msh6c90fc42a3fa0f0p105117jsn5a10aadec347",
          },
        })
        .then((res) => {
          console.log(res.data);
          games.value = res.data;
        })
        .catch((err) => {
          isError.value = true;
          errorMsg.value = err;
        });
    }

    return {
      getSearchValue,
      isError,
      games,
      errorMsg,
    };
  },
};
</script>
