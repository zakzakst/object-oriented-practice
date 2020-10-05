<template>
  <!-- 社員のシングルビュー要素 -->
  <div>
    <div class="has-text-centered mb-5">
      <figure class="member-single__img image is-128x128" :class="{'is-online': onlineStatus}">
        <img :src="`${appDir}/img/person.svg`">
      </figure>
      <h1 class="title mb-1">{{ name }}</h1>
      <p v-if="onlineStatus">オンライン</p>
    </div>
    <div class="mb-3">
      <h2 class="title is-5 mb-2">所属チーム</h2>
      <nuxt-link :to="`/team/${teamId}`" class="member-single__team media">
        <figure class="member-single__team-img media-left">
          <div class="image is-32x32">
            <img :src="`${appDir}/img/${teamIcon}`" :alt="teamName">
          </div>
        </figure>
        <p class="media-content">{{ teamName }}</p>
      </nuxt-link>
    </div>
    <div class="mb-3">
      <h2 class="title is-5 mb-1">電話番号</h2>
      <p>{{ tel }}</p>
    </div>
    <div class="mb-3">
      <h2 class="title is-5 mb-1">メールアドレス</h2>
      <p>{{ mail }}</p>
    </div>
    <div class="mb-3">
      <h2 class="title is-5 mb-1">メッセンジャー</h2>
      <p>{{ messenger }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {type: String, required: true},
    tel: {type: String, required: true},
    mail: {type: String, required: true},
    messenger: {type: String, required: true},
    onlineStatus: {type: Boolean, required: true},
    teamId: {type: String, required: true},
    teamName: {type: String, required: true},
    teamIcon: {type: String, required: true},
  },
  computed: {
    appDir() {
      return process.env.APP_DIR !== '' ? `/${process.env.APP_DIR}` : '';
    }
  }
}
</script>

<style lang="scss">
.member-single__img {
  position: relative;
  margin: 0 auto 1rem;
  &.is-online::after {
    position: absolute;
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    bottom: 0;
    right: 8px;
    background: $color-state--online;
    border: 4px solid #fff;
    border-radius: 50%;
  }
}
.member-single__team {
  align-items: center;
}
.member-single__team-img {
  padding: 12px;
  background: $color-icon-bg;
  border-radius: 50%;
}
</style>
