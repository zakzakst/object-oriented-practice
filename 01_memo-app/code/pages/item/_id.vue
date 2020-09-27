<template>
  <div>
    <div class="memo-content-btn buttons is-hidden-tablet">
      <nuxt-link to="/" class="button is-light">
        <span class="icon">
          <fa :icon="['fas', 'chevron-left']" class="fa-lg" />
        </span>
      </nuxt-link>
      <button class="button is-light" @click.prevent="signOut">
        <span class="icon">
          <fa :icon="['fas', 'sign-out-alt']" />
        </span>
      </button>
    </div>
    <h1 class="title">{{ title }}</h1>
    <div class="memo-item__date mb-4">
      <div class="tags has-addons">
        <span class="tag is-dark">作成日</span>
        <span class="tag is-light">{{ dateCreate }}</span>
      </div>
      <div class="tags has-addons">
        <span class="tag is-dark">最終更新日</span>
        <span class="tag is-light">{{ dateUpdated }}</span>
      </div>
    </div>
    <p class="content" v-html="$md.render(text)"></p>
    <div class="memo-item__btn buttons">
      <nuxt-link :to="`/edit/${$route.params.id}`" class="button is-light">
        <span class="icon">
          <fa :icon="['fas', 'pen']" class="fa-lg" />
        </span>
      </nuxt-link>
      <button class="button is-light" @click.prevent="modalOpen">
        <span class="icon">
          <fa :icon="['fas', 'trash']" class="fa-lg" />
        </span>
      </button>
    </div>
    <div class="memo-item__modal modal" :class="{'is-active': modalIsActive}">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <p class="has-text-centered mb-4">メモを削除してよろしいですか</p>
          <div class="buttons is-centered">
            <button class="button is-dark" @click.prevent="deleteMemo">削除する</button>
            <button class="button is-light" @click.prevent="modalClose">キャンセル</button>
          </div>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="modalClose"></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      text: '',
      dateCreate: null,
      dateUpdated: null,
      modalIsActive: false,
    }
  },
  methods: {
    signOut() {
      this.$router.push('/sign-in');
    },
    setItemData() {
      this.title = this.itemData.title;
      this.text = this.itemData.text;
      const dateCreateObj = new Date(Number(this.itemData.dateCreate));
      this.dateCreate = dateCreateObj.toLocaleDateString();
      const dateUpdatedObj = new Date(Number(this.itemData.dateUpdated));
      this.dateUpdated = dateUpdatedObj.toLocaleDateString();
    },
    deleteMemo() {
      this.modalClose();
      this.$store.dispatch('memo/deleteMemo', this.id);
    },
    modalOpen() {
      this.modalIsActive = true;
    },
    modalClose() {
      this.modalIsActive = false;
    }
  },
  created() {
    if (this.itemData) {
      this.setItemData();
    }
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    itemData() {
      return this.$store.getters['memo/getMemoItem'](this.id);
    }
  },
  watch: {
    itemData(newList, oldList) {
      if (newList || !oldList) {
        this.setItemData();
      }
    }
  }
}
</script>

<style lang="scss">
.memo-item__date {
  display: flex;
  & > .tags {
    margin-bottom: 0;
    margin-right: 8px;
    &:last-child {
      margin-right: 0;
    }
  }
}
.memo-item__btn {
  position: fixed;
  display: flex;
  top: 8px;
  right: 8px;
}
.memo-item__modal {
  & > .modal-content {
    max-width: 480px;
    padding: 0 16px;
  }
}
</style>
