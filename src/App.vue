<template lang="pug">
  TheLayout
    router-view
</template>

<script>
import TheLayout from '@/components/TheLayout.vue';

export default {
  name: 'App',
  components: { TheLayout },
};
</script>
