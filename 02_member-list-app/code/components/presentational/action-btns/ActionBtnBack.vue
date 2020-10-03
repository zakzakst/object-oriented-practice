<template>
  <button class="button is-light" @click="pageBack">
    <span class="icon">
      <fa :icon="['fas', 'chevron-left']" class="fa-lg" />
    </span>
  </button>
</template>

<script>
export default {
  methods: {
    pageBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss">
</style>
