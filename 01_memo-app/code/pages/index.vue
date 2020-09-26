<template>
  <div>
    <div class="memo-content-btn buttons is-hidden-tablet">
      <nuxt-link to="/create" class="button is-light">
        <span class="icon">
          <fa :icon="['fas', 'plus']" class="fa-lg" />
        </span>
      </nuxt-link>
      <button class="button is-light" @click.prevent="signOut">
        <span class="icon">
          <fa :icon="['fas', 'sign-out-alt']" />
        </span>
      </button>
    </div>
    <p class="has-text-centered mb-4">確認したいメモを選択してください</p>
    <div class="is-hidden-tablet">
      <transition-group name="memo-list-item">
        <memo-list-item v-for="memo in memoList"
          :key="memo.id"
          :id="memo.id"
          :title="memo.title"
          :dateUpdated="memo.dateUpdated"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import MemoListItem from '~/components/MemoListItem';

export default {
  components: {
    MemoListItem,
  },
  methods: {
    signOut() {
      this.$router.push('/sign-in');
    }
  },
  mounted() {
    this.$store.dispatch('memo/loadMemoList', 'user01');
  },
  computed: {
    memoList() {
      return this.$store.getters['memo/getMemoListSorted'];
    }
  }
}
</script>

<style lang="scss">
</style>
