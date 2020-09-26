<template>
  <div class="toast__wrapper">
    <div class="toast notification is-dark" :class="{'toast--active': isActive}">
      <button class="delete" @click="hideToast"></button>
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hideToast() {
      this.$store.dispatch('toast/clearMessage');
    }
  },
  computed: {
    isActive() {
      return this.$store.getters['toast/getIsActive'];
    },
    message() {
      return this.$store.getters['toast/getMessage'];
    }
  }
}
</script>

<style lang="scss">
.toast__wrapper {
  position: fixed;
  display: flex;
  bottom: 0;
  left: 8px;
  right: 8px;
  justify-content: center;
  z-index: $z-toast;
}
.toast {
  position: absolute;
  max-width: 480px;
  bottom: -1px;
  transform: translateY(100%);
  transition: all $transition-default;
  &.toast--active {
    bottom: 8px;
    transform: translateY(0);
  }
}
</style>
