<template>
  <li>{{ data.id }}：{{ data.name }}：{{ data.price }}：{{ num }}個</li>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    num: {
      type: Number,
      required: true,
    }
  },
}
</script>

<style lang="scss">
</style>
