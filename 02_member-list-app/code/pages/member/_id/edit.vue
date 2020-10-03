<template>
  <div>
    <action-btns>
      <action-btn-back />
    </action-btns>

    <member-edit-form
      ref="memberEditForm"
      :id="uid"
    />
    <button @click="getMemberEditFormValue">メンバーフォーム情報取得</button>
  </div>
</template>

<script>
import actionBtnsMixin from '~/mixins/actionBtns';
import MemberEditForm from '~/components/container/MemberEditForm';

export default {
  data() {
    return {
      uid: null,
    }
  },
  mixins: [
    actionBtnsMixin,
  ],
  components: {
    MemberEditForm,
  },
  methods: {
    setUserId() {
      this.uid = this.$route.params.id;
    },
    getMemberEditFormValue() {
      const value = this.$refs.memberEditForm.getFormValues();
      console.log(value);
    },
  },
  created() {
    this.setUserId();
  },
}
</script>

<style lang="scss">
</style>
