const bodyParser = require('body-parser')

module.exports = app => {
    app.use(bodyParser.json())

    // TODO:ここ以降にAPIの実装を追加
}
