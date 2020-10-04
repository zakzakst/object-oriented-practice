export default async ({ store, route, redirect, app }) => {
  // stateのユーザーID設定をチェック
  const authId = store.getters['auth/id'];
  const path = route.path;
  if (!authId && path !== '/auth') {
    // ■ 設定されていない場合
    // ユーザー認証状況をチェック
    const authCheck = await store.dispatch('auth/authCheck');
    if(!authCheck) {
      redirect('/auth');
      return;
    }
  }

  // 再読み込み時のページをチェック
  const fromPage = app.context.from.name;
  const currentPage = route.name;
  // ■ 「チーム詳細」「チーム編集」ページで再読み込みした場合
  // 「チーム一覧」ページにリダイレクト
  if (
    (fromPage === 'team-id' && currentPage === 'team-id') ||
    (fromPage === 'team-id-edit' && currentPage === 'team-id-edit')
  ) {
    redirect('/team');
  }
  // ■ 「メンバー詳細」「メンバー編集」ページで再読み込みした場合
  // 「メンバー一覧」ページにリダイレクト
  if (
    (fromPage === 'member-id' && currentPage === 'member-id') ||
    (fromPage === 'member-id-edit' && currentPage === 'member-id-edit')
  ) {
    redirect('/member');
  }
}
