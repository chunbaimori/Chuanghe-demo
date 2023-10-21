import { createRouter, createWebHashHistory } from 'vue-router';
import index1 from '../view/index1.vue';
import index2 from '../view/index2.vue';
import index3 from '../view/index3.vue';

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/index1',
			name: 'Index1',
			component: index1
		},
		{
			path: '/index2',
			name: 'Index2',
			component: index2
		},
		{
			path: '/index3',
			name: 'Index3',
			component: index3
		}
	]
});

export default router;
