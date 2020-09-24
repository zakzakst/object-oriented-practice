<template>
  <div class="px-3 py-3">
    <div class="columns">
      <div class="memo-list column is-one-quarter has-background-light">
        <div class="memo-list__btn has-background-light">
          <nuxt-link to="/create" class="button is-text">
            <span class="icon">
              <fa :icon="['fas', 'plus']" class="fa-lg" />
            </span>
          </nuxt-link>
        </div>
        <memo-list-item v-for="memo in memoList"
          :key="memo.id"
          :id="memo.id"
          :title="memo.title"
          :text="memo.text"
        />
      </div>
      <div class="memo-content column is-three-quarters">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import MemoListItem from '~/components/MemoListItem';
import memoMixin from '~/mixins/memoMixin';

export default {
  components: {
    MemoListItem,
  },
  mixins: [
    memoMixin
  ],
  mounted() {
    this.$store.dispatch('memo/loadMemoList', 'user01');
  },
  computed: {
    memoList() {
      return this.$store.getters['memo/getMemoList'];
    }
  }
}
</script>

<style lang="scss">
$memo-list-btn-height: 48px;

.memo-list,
.memo-content {
  position: relative;
  height: 100vh;
  padding-top: $memo-list-btn-height + 8px;
  padding-bottom: 32px;
  overflow-y: auto;
}
.memo-list__btn {
  display: flex;
  position: absolute;
  height: $memo-list-btn-height;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 .75rem;
  justify-content: flex-end;
  align-items: center;
}
.memo-content {
  padding-left: 32px;
  padding-right: 32px;
}
</style>
