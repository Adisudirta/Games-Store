<template>
  <HeaderVue></HeaderVue>
  <BannerVue></BannerVue>
</template>

<script>
import HeaderVue from '../components/Header.vue';
import BannerVue from '../components/Banner.vue';
export default {
  name: 'HomeVUe',
  components: {
    HeaderVue,
    BannerVue,
  },
};
</script>
