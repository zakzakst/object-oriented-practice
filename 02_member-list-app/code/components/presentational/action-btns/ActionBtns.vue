<template>
  <div class="action-btns buttons ml-5 mr-5">
    <div class="action-btns__item">
      <slot name="left" />
    </div>
    <div class="action-btns__item">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.action-btns {
  display: flex;
}
.action-btns__item:last-child {
  margin-left: auto;
}
</style>
