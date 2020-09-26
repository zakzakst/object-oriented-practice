<template>
  <div class="memo-wrapper">
    <div class="memo-list has-background-light is-hidden-mobile">
      <div class="memo-list__btn buttons has-background-light">
        <nuxt-link to="/create" class="button is-text mr-0">
          <span class="icon">
            <fa :icon="['fas', 'plus']" />
          </span>
        </nuxt-link>
        <button class="button is-text" @click.prevent="signOut">
          <span class="icon">
            <fa :icon="['fas', 'sign-out-alt']" />
          </span>
        </button>
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
    <toast />
  </div>
</template>

<script>
import MemoListItem from '~/components/MemoListItem';
import Toast from '~/components/Toast';

export default {
  components: {
    MemoListItem,
    Toast,
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
$memo-list-width: 25%;
$memo-list-btn-height: 48px;

.memo-wrapper {
  @include mq(mb-mf) {
    padding-left: $memo-list-width;
  }
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
  padding: 0 .5rem;
  justify-content: flex-end;
  align-items: center;
  & > .button {
    margin-bottom: 0;
  }
}
.memo-content {
  position: relative;
  padding: ($memo-list-btn-height + 8px) 16px 16px;
  @include mq(mb-mf) {
    padding: ($memo-list-btn-height + 8px) 32px 32px;
  }
}
.memo-content-btn {
  position: absolute;
  top: 8px;
  left: 16px;
  @include mq(mb-mf) {
    left: 32px;
  }
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
