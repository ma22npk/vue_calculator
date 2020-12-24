const store = new Vuex.Store({
        state: {
            // ボタンの文字を定義
            numbers: [
                ["7", "8", "9", "C"],
                ["4", "5", "6", "+"],
                ["1", "2", "3", "-"],
                ["0", "="]
            ],
            // 計算結果を設定する変数を定義
            display: "0"
        }
    })
    // mapstateを利用するために記述
const { mapState } = Vuex

new Vue({
    store,
    el: "#app",
    // mapStateから値を取得
    computed: mapState(['numbers', 'display'])
})