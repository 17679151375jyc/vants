export default {
    state: { //创建数据,类似于data
        data: null,
        aaa: null,
        test1: 100,
        test2: 200,
        stData: '我是vuex的数据'
    },
    getters: { //state的计算属性,类似于computed:
        sum: () => {
            return 250;
        }
    },
    mutations: { //同步修改数据
        setTest1(state, newTest1) {
            state.test1 = newTest1
        },
        setTest2(state, newTest2) {
            state.test2 = newTest2
        }
    },
    actions: { // 异步修改数据（提交的是mutations）
        changeC(context, str) {
            context.state.data = str;
        },
        yibuTest1({ commit }) {
            commit('setTest1', 5000);
        },
        yibuTest2(context, newTest2) {
            context.state.test2 = newTest2;
        }
    }
}