const store = new Vuex.Store({
    state: {
        numbers: [
            ["7", "8", "9", "C"],
            ["4", "5", "6", "+"],
            ["1", "2", "3", "-"],
            ["0", "="]
        ],
        display: "0",
        // 一つ前の項の値を格納
        previous: ""
    },
    mutations: {
        addDisp(state, payload) {
            // 「＝」ボタンが押された場合、計算を実行
            if (payload === "=") {
                state.display = eval(state.display)
                    //  「＋」、「ー」が押された場合の処理
            } else if (payload === "+" || payload === "-") {
                // 一つ前で「＋」、「ー」がクリックされた場合、何も処理しない
                if (state.previous === "+" || state.previous === "-") {
                    return;
                }
                state.previous = payload
                state.display += payload
                    // クリア処理
            } else if (payload === "C") {
                state.display = "0";
                state.previous = ""
                    // 押されたボタンが数字ボタンの場合
            } else {
                // 初期状態や「C」がクリックされた時の処理、既存の表示をクリックした値に置き換える
                if (state.previous === "") {
                    state.display = payload
                    state.previous = payload
                        // 一つ前の項が0の場合何も処理しない
                } else if (state.previous === "0") {
                    return
                } else {
                    // 一つ前に押されたボタンが「＋」もしくは「ー」の場合、previous変数を初期化する。
                    if (state.previous === "+" || state.previous === "-") {
                        state.previous = ""
                    }
                    state.display += payload
                    state.previous += payload
                }
            }
        }
    }
})
const { mapState } = Vuex

new Vue({
    store,
    el: "#app",
    computed: mapState(['numbers', 'display', 'previous']),
    methods: {
        addDisp(number) {
            this.$store.commit('addDisp', number)
        }
    }
})