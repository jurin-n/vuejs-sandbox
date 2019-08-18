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
