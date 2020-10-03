<template>
  <button class="button is-light" @click="deleteEvent">
    <span class="icon">
      <fa :icon="['fas', 'trash']" class="fa-lg" />
    </span>
  </button>
</template>

<script>
export default {
  methods: {
    deleteEvent() {
      this.$emit('deleteEvent');
    }
  }
}
</script>

<style lang="scss">
</style>
