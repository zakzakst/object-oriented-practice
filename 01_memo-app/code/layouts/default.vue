<template>
  <div class="memo-wrapper">
    <div class="memo-list has-background-light">
      <div class="memo-list__btn has-background-light">
        <nuxt-link to="/create" class="button is-text">
          <span class="icon">
            <fa :icon="['fas', 'plus']" class="fa-lg" />
          </span>
        </nuxt-link>
      </div>
      <transition-group name="memo-list-item">
        <memo-list-item v-for="memo in memoList"
          :key="memo.id"
          :id="memo.id"
          :title="memo.title"
          :dateUpdated="memo.dateUpdated"
        />
      </transition-group>
    </div>
    <div class="memo-content">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import MemoListItem from '~/components/MemoListItem';

export default {
  components: {
    MemoListItem,
  },
  mounted() {
    this.$store.dispatch('memo/loadMemoList', 'user01');
  },
  computed: {
    memoList() {
      const list = this.$store.getters['memo/getMemoList'];
      const listSorted = list.slice().sort(function(a, b) {
        return b.dateUpdated - a.dateUpdated;
      });
      return listSorted;
    }
  }
}
</script>

<style lang="scss">
$memo-list-width: 25%;
$memo-list-btn-height: 48px;

.memo-wrapper {
  padding-left: $memo-list-width;
}
.memo-list {
  position: fixed;
  width: $memo-list-width;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  padding: ($memo-list-btn-height + 8px) .75rem 32px;
  overflow-y: auto;
  z-index: $z-memo-list;
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
  padding: ($memo-list-btn-height + 8px) 32px 32px;
}

// ページトランジション
.page-enter-active, .page-leave-active {
  transition: opacity $transition-default;
}
.page-enter, .page-leave-active {
  opacity: 0;
}

// ナビゲーションのリストトランジション
.memo-list-item-move {
  transition: transform $transition-default;
}
</style>
