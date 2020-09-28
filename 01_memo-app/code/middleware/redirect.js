export default function ({ store, route, redirect }) {
  if (!store.state.auth.id && route.name !== 'sign-in') {
    return redirect('/sign-in');
  }
}
