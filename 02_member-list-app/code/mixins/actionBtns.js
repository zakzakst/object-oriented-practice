import ActionBtns from '~/components/presentational/action-btns/ActionBtns';
import ActionBtnBack from '~/components/presentational/action-btns/ActionBtnBack';
import ActionBtnCreate from '~/components/presentational/action-btns/ActionBtnCreate';
import ActionBtnEdit from '~/components/presentational/action-btns/ActionBtnEdit';
import ActionBtnDelete from '~/components/presentational/action-btns/ActionBtnDelete';
import ActionBtnSignOut from '~/components/presentational/action-btns/ActionBtnSignOut';

export default {
  components: {
    ActionBtns,
    ActionBtnBack,
    ActionBtnCreate,
    ActionBtnEdit,
    ActionBtnDelete,
    ActionBtnSignOut,
  },
  methods: {
    async actionSignOutEvent() {
      const signOut = await this.$store.dispatch('auth/signOut');
      // ユーザー認証ページに移動
      this.$router.push('/auth');
      // サインアウト完了メッセージを表示
      this.$store.dispatch('toast/show', 'サインアウトしました');
    }
  },
}
