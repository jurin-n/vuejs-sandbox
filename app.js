var items = [
    {
        name: '万年筆',
        price: 30000,
        quantity: 0
    },
    {
        name: 'ノート',
        price: 400,
        quantity: 0
    },
    {
        name: '消しゴム',
        price: 500,
        quantity: 0
    }
]

var vm = new Vue({
    el: '#app',
    data : {
        items: items,
        loggedInButton: 'ログイン済みのため購入できます。',
        canBuy: false
    },
    filters : {
        numberWithDelimiter: function (value) {
            if (!value){
                return '0'
            }
            return value.toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,')
        }

    }
})