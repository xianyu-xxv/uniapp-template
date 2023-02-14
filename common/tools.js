const install = (Vue, vm) => {
	
	Vue.prototype.$t = {
		// 测试加法
		toUpperCase(arg){
			return arg && arg.toUpperCase();
		}
	}
}

export default {
	install
}
