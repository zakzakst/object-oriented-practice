<template>
  <div class="column is-full">
    <div class="card">
      <div class="card-content">
        <p>{{ data.name }}</p>
        <p>{{ data.price }}</p>
        <p>{{ data.sum }}</p>
        <button class="button" @click="changeNum(-1)">-</button>
        {{ num }}
        <button class="button" @click="changeNum(1)">+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      num: 0,
    }
  },
  methods: {
    changeNum(num) {
      if (this.num + num < 0) {
        this.num = 0;
      } else {
        this.num += num;
      }
      this.$emit('change', this.data.price * this.num);
    }
  }
}
</script>

<style lang="scss">
</style>
