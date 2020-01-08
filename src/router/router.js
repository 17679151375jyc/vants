	// 路由路口文件
	import Vue from 'vue'
	import Router from 'vue-router'

	import Vuex from 'vuex'
	Vue.use(Vuex);
	import store from '../store/store'

	import home from '@/components/home'
	import zhuce from '@/components/zhuce'
	import gai from '@/components/crst'
	import danger from '@/components/danger'
	import es from '@/components/es6'
	import con from '@/components/const'
	import test from '@/components/test'
	import index from '@/components/index'
	Vue.use(Router);
	const router = new Router({
	    routes: [{
	            path: '*',
	            redirect: '/home'
	        },
	        {
	            path: '/register',
	            name: 'register',
	            component: () =>
	                import ('@/components/register.vue'),
	        },
	        {
	            path: '/wenben',
	            name: 'wenben',
	            component: () =>
	                import ('@/components/wenben.vue'),
	        },
	        {
	            path: '/code',
	            name: 'code',
	            component: () =>
	                import ('@/components/code.vue'),
	        },
	        {
	            path: '/home',
	            name: 'home',
	            component: home,
	            children: [{
	                path: 'child1',
	                name: 'child1',
	                component: () =>
	                    import ('@/components/child1.vue')
	            }, {
	                path: 'child2',
	                name: 'child2',
	                component: () =>
	                    import ('@/components/child2.vue')
	            }]
	        }, {
	            path: '/zhuce',
	            name: '/zhuce',
	            // component:()=>import('@/components/zhuce.vue'),
	            component: zhuce
	        }, {
	            path: '/gai',
	            name: 'gai',
	            component: gai
	        }, {
	            path: '/danger',
	            name: '/danger',
	            component: danger
	        }, {
	            path: '/es',
	            name: '/es',
	            component: es
	        }, {
	            path: '/con',
	            name: '/con',
	            component: con,
	            meta: {
	                title: "跳转页",
	                loginC: true
	            }
	        }, {
	            path: '/scen',
	            name: 'scen',
	            component: () =>
	                import ('@/components/scen')
	        }, {
	            path: '/test',
	            name: '/test',
	            component: test
	        }, {
	            path: '/index',
	            name: '/index',
	            component: index,
	            meta: {
	                title: "首页",
	                loginC: true
	            }
	        }, {
	            path: '/pro',
	            name: 'pro',
	            component: () =>
	                import ('@/components/pro')
	        }, {
	            path: '/address',
	            name: 'address',
	            component: () =>
	                import ('@/components/address')
	        }, {
	            path: '/xunhuan',
	            name: 'xunhuan',
	            component: () =>
	                import ('@/components/es6/xunhuan')
	        }, {
	            path: '/obj',
	            name: 'obj',
	            component: () =>
	                import ('@/components/es6/obj')
	        }, {
	            path: '/Promise',
	            name: 'Promise',
	            component: () =>
	                import ('@/components/es6/Promise')
	        }, {
	            path: '/cla',
	            name: 'cla',
	            component: () =>
	                import ('@/components/es6/CLASS')
	        }, {
	            path: '/asy',
	            name: 'asy',
	            component: () =>
	                import ('@/components/es6/asy')
	        }, {
	            path: '/zho',
	            name: 'zho',
	            component: () =>
	                import ('@/components/es6/zho')
	        }
	    ]
	})
	router.beforeEach((to, from, next) => {
	    if (to.matched.some(route => route.meta.loginC)) {
	        if (store.state.app.data == null) {
	            next({ path: '/home', query: { url: to.path } })
	        } else {
	            next();
	        }
	    } else {
	        next();
	    }
	})
	export default router;