export default async ({ store, route, redirect }) => {
  // stateのユーザーID設定をチェック
  const authId = store.getters['auth/id'];
  const path = route.path;
  if (!authId && path !== '/auth') {
    // ■ 設定されていない場合
    // ユーザー認証状況をチェック
    const authCheck = await store.dispatch('auth/authCheck');
    if(!authCheck) {
      redirect('/auth');
    }
  }
}
