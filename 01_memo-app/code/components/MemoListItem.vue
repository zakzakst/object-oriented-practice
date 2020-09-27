<template>
  <nuxt-link :to="`/item/${id}`" class="memo-list-item media">
    <figure class="memo-list-item__icon media-left">
      <span class="icon is-medium">
        <fa :icon="['far', 'file-alt']" class="fa-2x" />
      </span>
    </figure>
    <div class="memo-list-item__content media-content">
      <div class="content">
        <p class="memo-list-item__title has-text-weight-bold mb-1">{{ title }}</p>
        <p class="memo-list-item__text">{{ dateUpdatedStr }}</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['id', 'title', 'dateUpdated'],
  computed: {
    dateUpdatedStr() {
      const dateUpdatedObj = new Date(Number(this.dateUpdated));
      return `${dateUpdatedObj.toLocaleDateString()} ${dateUpdatedObj.toLocaleTimeString()}`;
    }
  }
}
</script>

<style lang="scss">
.memo-list-item {
  color: $color-text-default;
  transition: color $transition-default;
  &:hover {
    color: $color-text-hover;
  }
  &.nuxt-link-active {
    color: $color-text-active;
  }
}
.memo-list-item__icon {
  margin-right: 16px;
  align-self: center;
}
.memo-list-item__content {
  width: calc(100% - 48px);
}
.memo-list-item__title,
.memo-list-item__text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
