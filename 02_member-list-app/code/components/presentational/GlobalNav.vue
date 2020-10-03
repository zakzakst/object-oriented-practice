<template>
  <div v-if="links" class="tabs is-centered">
    <ul>
      <li v-for="(link, index) in links" :key="index" :class="{'is-active': link.to === $nuxt.$route.path}">
        <nuxt-link :to="link.to">
          <span class="icon is-small">
            <fa :icon="link.icon" />
          </span>
          <span>{{ link.label }}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          to: '/member',
          label: '社員',
          icon: ['fas', 'user'],
        },
        {
          to: '/team',
          label: 'チーム',
          icon: ['fas', 'users'],
        },
      ]
    }
  },
}
</script>

<style lang="scss">
</style>
