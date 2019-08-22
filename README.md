# vuejs-sandbox
Vue.js試してます。

# Vue CLIインストール
```
npm install -g @vue/cli@3.0.1 @vue/cli-service-global@3.0.1
```

# vuex-basicプロジェクト
### プロジェクト作成
```
vue create vuex-basic -d
```

### 起動
```
cd vuex-basic
npm run serve
```


### kanban-app
#### セットアップ
```
npm install -g @vue/cli-init@3.0.1
vue init webpack kanban-app
```
#### ESlintプラグイン導入
```
npm install --save-dev eslint-plugin-vue@4.7.1
```
#### バックエンドAPIサーバー環境導入
```
npm install --save-dev body-parser
```

#### 状態管理ライブラリの導入
``` bash
cd kanban-app

# インストール
npm install --save vuex es6-promise

# storeディレクトリ作成
mkdir -p src/store
touch src/store/index.js
touch src/store/mutation-types.js
touch src/store/mutation.js
touch src/store/getters.js
touch src/store/actions.js
```

#### HTTPクライアントライブラリの導入
``` bash
cd kanban-app

# インストール
npm install --save axios

# apiディレクトリ作成
mkdir -p src/api
touch src/api/index.js
```

#### 単体テストユーティリティの導入
``` bash
cd kanban-app

# インストール
npm install --save-dev @vue/test-utils@1.0.0-beta.24
```

#### E2Eテストのコマンド登録
``` bash
cd kanban-app

# カスタムコマンド用のディレクトリ作成
mkdir -p test/e2e/custom-commands

# カスタムコマンド
touch test/e2e/custom-commands/trigger.js # イベントをトリガー
touch test/e2e/custom-commands/enterValue.js # input要素へのキーボード入力エミュレート
```
参考 https://nightwatchjs.org/guide/#writing-custom-commands


#### 単一ファイルコンポーネント化
``` bash
cd kanban-app

mkdir -p src/components/{atoms,molecules,organisms,templates}
touch src/components/atoms/Kbn{Button,Icon}.vue
touch src/components/molecules/Kbn{LoginForm,BoardNavigation,TaskListHeader,TaskForm,TaskCard,TaskDetailForm}.vue
touch src/components/organisms/Kbn{BoardTask,TaskList}.vue
touch src/components/templates/Kbn{LoginView,BoardView,TaskDetailModal}.vue
```

## JavaScript関連参考
* [オブジェクト初期化子](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring)
* [オブジェクトの分割代入](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)
