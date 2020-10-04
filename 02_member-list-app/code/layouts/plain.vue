<template>
  <div>
    <button @click="signout">サインアウト</button>
    <Nuxt />
    <toast />
  </div>
</template>

<script>
import Toast from '~/components/container/Toast';

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
