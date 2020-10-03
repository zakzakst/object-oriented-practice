<template>
  <div class="container">
    <!-- <member-collection /> -->

    <!-- <team-collection /> -->

    <!-- <member-single-item
      v-if="memberItem"
      :name="memberItem.name"
      :tel="memberItem.tel"
      :mail="memberItem.mail"
      :messenger="memberItem.messenger"
      :onlineStatus="memberItem.onlineStatus"
      :teamId="memberItem.teamId"
      :teamName="memberItem.teamName"
      :teamIcon="memberItem.teamIcon"
    /> -->
    <!-- <member-single-item
      name="山田太郎"
      tel="000-0000-0001"
      mail="tyamada@mail.com"
      messenger="@yamadataro001"
      onlineStatus
      teamId="team01"
      teamName="エンジニアリング"
      teamIcon="icon-engineering.png"
    /> -->

    <!-- <team-single-item
      v-if="teamItem"
      :name="teamItem.name"
      :introduction="teamItem.introduction"
      :icon="teamItem.icon"
    />
    <member-collection
      :teamFilter="teamId"
    /> -->
    <!-- <team-single-item
      name="エンジニアリング"
      introduction="テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
      icon="icon-engineering.png"
    /> -->

    <!-- <member-edit-form
      ref="memberEditForm"
      :id="uid"
    />
    <button @click="getMemberEditFormValue">メンバーフォーム情報取得</button> -->
    <!-- <member-edit-form
      v-if="memberItemForm"
      :name="memberItemForm.name"
      :tel="memberItemForm.tel"
      :mail="memberItemForm.mail"
      :messenger="memberItemForm.messenger"
      :teamId="memberItemForm.teamId"
    /> -->
    <!-- <member-edit-form
      name="山田太郎"
      tel="000-0000-0001"
      mail="tyamada@mail.com"
      messenger="@yamadataro001"
      teamId="team01"
    /> -->

    <!-- <team-edit-form
      ref="teamEditForm"
      :id="teamId"
    />
    <button @click="getTeamEditFormValue">チームフォーム情報取得</button> -->

    <!-- <member-create-form
      ref="memberCreateForm"
    />
    <button @click="getMemberCreateFormValue">メンバー作成フォーム情報取得</button> -->

    <!-- <team-create-form
      ref="teamCreateForm"
    />
    <button @click="getTeamCreateFormValue">チーム作成フォーム情報取得</button> -->
  </div>
</template>

<script>
import MemberCollection from '~/components/container/MemberCollection';
import TeamCollection from '~/components/container/TeamCollection';
import MemberSingleItem from '~/components/presentational/MemberSingleItem';
import TeamSingleItem from '~/components/presentational/TeamSingleItem';
import MemberEditForm from '~/components/container/MemberEditForm';
import TeamEditForm from '~/components/container/TeamEditForm';
import MemberCreateForm from '~/components/container/MemberCreateForm';
import TeamCreateForm from '~/components/container/TeamCreateForm';

export default {
  data() {
    return {
      uid: 'user02',
      teamId: 'team02',
    }
  },
  components: {
    MemberCollection,
    TeamCollection,
    MemberSingleItem,
    TeamSingleItem,
    MemberEditForm,
    MemberCreateForm,
  },
  methods: {
    getMemberEditFormValue() {
      const value = this.$refs.memberEditForm.getFormValues();
      console.log(value);
    },
    getTeamEditFormValue() {
      const value = this.$refs.teamEditForm.getFormValues();
      console.log(value);
    },
    getMemberCreateFormValue() {
      const value = this.$refs.memberCreateForm.getFormValues();
      console.log(value);
    },
    getTeamCreateFormValue() {
      const value = this.$refs.teamCreateForm.getFormValues();
      console.log(value);
    }
  },
  computed: {
    memberItem() {
      return this.$store.getters['member/findMemberItemById'](this.uid);
    },
    teamItem() {
      return this.$store.getters['team/findTeamItemById'](this.teamId);
    }
  },
}
</script>

<style lang="scss">
</style>
