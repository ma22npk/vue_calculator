const store = new Vuex.Store({
    state: {
        numbers: [
            ["7", "8", "9", "C"],
            ["4", "5", "6", "+"],
            ["1", "2", "3", "-"],
            ["0", "="]
        ],
        display: "0"
    },
    mutations: {
        addDisp(state, payload) {
            // =がクリックされた際に計算を行う
            if (payload === "=") {
                state.display = eval(state.display)
                return
            }
            // 表示されている値が0の場合、0は表示しないように制御
            if (state.display === "0") {
                state.display = payload
                    // 表示されている値が0以外の場合は、クリックした値を後ろに結合
            } else {
                state.display += payload
            }
        }
    }
})
const { mapState } = Vuex

new Vue({
    store,
    el: "#app",
    computed: mapState(['numbers', 'display']),
    methods: {
        addDisp(number) {
            // mutationの呼び出し
            this.$store.commit('addDisp', number)
        }
    }
})