## UI Components 設計について

bulletproof-react を元に各機能を`/features`として構成する。

本題の共通 UI コンポーネントの定義。

- Elements
- Parts
- Layout
- functional

### Elements

HTML 要素の集合体。
state やドメイン知識を持たない**props を受け取る View のみの表示**

- Button
- Input
- Link

### Parts

`Elements`コンポーネントを二つ以上集めたコンポーネント。

### Layout

枠組みのレイアウトを構成する要素。

Header, Footer などを指す。

UI コンポーネントを動的に見た目を変更したい（状態を持つ）

- 絞り込み
- 各機能ごとの検索
- ページネーション
- パンくずリスト
- modal
- tooltip
