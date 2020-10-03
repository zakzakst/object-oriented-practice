<template>
  <div>
    <button @click="signout">サインアウト</button>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'layout-plain',
  methods: {
    async signout() {
      const test = await this.$store.dispatch('auth/signOut');
      console.log(test);
    }
  }
}
</script>

<style lang="scss">
</style>
