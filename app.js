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
        loggedInButton: 'ログイン済みのため購入できます。'
    },
    filters : {
        numberWithDelimiter: function (value) {
            if (!value){
                return '0'
            }
            return value.toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,')
        }

    },
    methods: {
        doBuy: function () {
            // 本来はここでサーバーと通信を行う。
            alert(this.totalPriceWithTax + '円のお買い上げとなります。')
            this.items.forEach(function (item) {
                item.quantity = 0
            })
        }
    },
    computed: {
        totalPrice: function () {
            return this.items.reduce(function (sum, item){
                return sum + (item.price * item.quantity)
            }, 0)
        },
        totalPriceWithTax: function () {
            return Math.floor(this.totalPrice * 1.08)
        },
        canBuy: function () {
            return this.totalPrice >= 1000
        },
        errorMessageStyle: function () {
            return {
                border: this.canBuy ? '' : '1px solid red',
                color: this.canBuy ? '' : 'red'
            }
        }
    }
})