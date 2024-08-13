// common/http.api.js

import * as user from './modules/user.js';
const http = uni.$u.http;

// api 接口管理
const install = (Vue, vm) => {

	let api  = {
		// test get api
		getSearch: (params = {}) => http.get('/http/search', params),
		// test get loading
		getReqLoading: (params = {}) => http.get('/http/reqloading', params),
		// modules import
		user
	};
	
	let keys = Object.keys(api);
	keys.forEach(k=>{
		if(typeof api[k] == 'object'){
			Vue.prototype['$h'+ k] = api[k];
		}
	})
	
	Vue.prototype.$api = api;
	console.log('Vue.prototype：',Vue.prototype);
}

export default {
	install
}
