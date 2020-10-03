<template>
  <div>
    <action-btns>
      <action-btn-back />
    </action-btns>

    <member-create-form
      ref="memberCreateForm"
    />
    <button @click="getMemberCreateFormValue">メンバー作成フォーム情報取得</button>
  </div>
</template>

<script>
import actionBtnsMixin from '~/mixins/actionBtns';
import MemberCreateForm from '~/components/container/MemberCreateForm';

export default {
  mixins: [
    actionBtnsMixin,
  ],
  components: {
    MemberCreateForm,
  },
  methods: {
    getMemberCreateFormValue() {
      const value = this.$refs.memberCreateForm.getFormValues();
      console.log(value);
    },
  },
}
</script>

<style lang="scss">
</style>
