# 5_コンポーネント・STATE計画

## 必要なコンポーネントを書き出す

### container
- 公園（コレクションビュー表示）
- 遊具（コレクションビュー表示：全件／公園に設置でフィルターできるようにする）
- 公園フォーム（作成／編集）
- 遊具フォーム（作成／編集）

### presentational
- 公園（シングルビュー表示）
- 遊具（シングルビュー表示）
- 公園（コレクションビュー要素）
- 遊具（コレクションビュー要素）
- フォーム要素
- アクションボタン（枠 ※今回はユーザー認証の状態で表示非表示を切り替えるため）

### 共通（propsなし）
- グローバルナビゲーション
- 処理状態表示トースト
- アクションボタン（中身）


## コンポーネントの状態を書き出す
- グローバルナビゲーション
  - isActive：そのリンク先のページが表示されている状態
- アクションボタン
  - isActive：表示されている状態


## 必要なデータを書き出す
- ユーザーデータ
- 公園データ
- 遊具データ
- 公園／遊具対応データ（今回は多対多になるため）
