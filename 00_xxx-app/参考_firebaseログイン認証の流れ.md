## 利用するstateデータ
- auth/uid
- xxxx/items（「xxxx」モジュールの「items」リスト）

## 利用するaction
- auth/setUid
- xxxx/readItems
- xxxx/clearItems

## 手順概要
1. 【auth】stateのuidを読む
`computed : this.uid → this.$store.getters['auth/uid'];`
1. 【auth】uidが設定されていない場合、firebaseの「onAuthStateChanged」でログイン状態の変化を監視
`created : this.$store.dispatch('auth/setUid');`
1. 【xxxx】stateのuidを読む
`computed : this.uid → this.$store.getters['auth/uid'];`
1. 【xxxx】uidが変化したタイミングで対応するデータを読む
`watch : this.uid → this.$store.dispatch('xxxx/readItems', this.uid);`
