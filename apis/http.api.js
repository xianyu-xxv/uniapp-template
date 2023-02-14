// common/http.api.js

import * as user from './modules/user.js';
const http = uni.$u.http;

// api 接口管理
const install = (Vue, vm) => {

	Vue.prototype.$api  = {
		// test get api
		getSearch: (params = {}) => http.get('/http/search', params),
		// test get loading
		getReqLoading: (params = {}) => http.get('/http/reqloading', params),
		// modules import
		user
	};
}

export default {
	install
}
