import {
	router,
	RouterMount
} from '@/common/router.js';
const install = (Vue, vm) => {
	
	Vue.prototype.$t = {
		// 测试加法
		toUpperCase(arg){
			return arg && arg.toUpperCase();
		},
		go(path, params) {
			router.push({
				name: path,
				params: params
			});
		},
	}
}

export default {
	install
}
