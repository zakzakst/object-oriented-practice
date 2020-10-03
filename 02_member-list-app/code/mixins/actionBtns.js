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
    actionSignOutEvent() {
      console.log('sign out');
    }
  },
}
