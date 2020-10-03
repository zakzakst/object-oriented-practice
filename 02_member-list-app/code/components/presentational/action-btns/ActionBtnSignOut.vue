<template>
  <button class="button is-light" @click="signOutEvent">
    <span class="icon">
      <fa :icon="['fas', 'sign-out-alt']" class="fa-lg" />
    </span>
  </button>
</template>

<script>
export default {
  methods: {
    signOutEvent() {
      this.$emit('signOutEvent');
    }
  }
}
</script>

<style lang="scss">
</style>
