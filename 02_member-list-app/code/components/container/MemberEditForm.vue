<template>
  <!-- 社員の編集 -->
  <div>
    <div class="field">
      <label class="label">名前</label>
      <div class="control">
        <input v-model="memberItem.name" class="input" type="text" placeholder="山田太郎">
      </div>
    </div>
    <div class="field">
      <label class="label">電話番号</label>
      <div class="control">
        <input v-model="memberItem.tel" class="input" type="text" placeholder="000-0000-0000">
      </div>
    </div>
    <div class="field">
      <label class="label">メールアドレス</label>
      <div class="control">
        <input v-model="memberItem.mail" class="input" type="email" placeholder="sample@mail.com">
      </div>
    </div>
    <div class="field">
      <label class="label">メッセンジャー</label>
      <div class="control">
        <input v-model="memberItem.messenger" class="input" type="text" placeholder="@sample00">
      </div>
    </div>
    <div class="field">
      <label class="label">チーム</label>
      <div class="control">
        <div class="select">
          <select v-model="memberItem.teamId">
            <option v-for="item in teamItems"
              :key="item.id"
              :value="item.id"
            >{{ item.name }}</option>
            <!-- <option value="team01">エンジニアリング</option>
            <option value="team02">デザイン</option> -->
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {type: String, required: true},
    // name: {type: String, required: true},
    // tel: {type: String, required: true},
    // mail: {type: String, required: true},
    // messenger: {type: String, required: true},
    // teamId: {type: String, required: true},
  },
  // data() {
  //   return {
  //     name: '山田太郎',
  //     tel: '000-0000-0001',
  //     mail: 'tyamada@mail.com',
  //     messenger: '@yamadataro001',
  //     teamId: 'team01',
  //     // teamItems: [
  //     //   {id: 'team01', name: 'エンジニアリング'},
  //     //   {id: 'team02', name: 'デザイン'},
  //     // ]
  //   }
  // },
  methods: {
    getFormValues() {
      return JSON.parse(JSON.stringify(this.memberItem));
    }
  },
  computed: {
    memberItem() {
      const memberItemBase = this.$store.getters['member/findMemberItemById'](this.id);
      return JSON.parse(JSON.stringify(memberItemBase));
    },
    teamItems() {
      return this.$store.getters['team/teamItems'];
    }
  }
}
</script>

<style lang="scss">
</style>
