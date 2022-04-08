import { createWebHistory, createRouter } from 'vue-router'
import HomePage from '@/views/pages/HomePage.vue'
import DetailPage from '@/views/pages/DetailPage.vue'
import CartPage from '@/views/pages/CartPage.vue'
import LoginPage from '@/views/pages/LoginPage.vue'
import RegisterPage from '@/views/pages/RegisterPage.vue'
import LayoutWebsite from '@/views/LayoutWebsite.vue'

const routes = [
	{
		path: "/",
		component: LayoutWebsite,
		redirect: "/home",
		children: [
			{
				path: '/home',
				component: HomePage,
			},
			{
				path: '/detail',
				component: DetailPage,
			},
			{
				path: '/cart',
				component: CartPage,
			},
		],
	},
	// {
	// 	path: '/home',
	// 	component: HomePage,
	// },
	// {
	// 	path: '/detail',
	// 	component: DetailPage,
	// },
	// {
	// 	path: '/cart',
	// 	component: CartPage,
	// },
	{
		path: '/login',
		component: LoginPage,
	},
	{
		path: '/register',
		component: RegisterPage,
	},
	// {
	//     path: '/:pathMatch(.*)*',
	//     name: 'NotFound',
	//     component: NotFoundPage,
 //  	},
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
