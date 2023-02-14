// test user request api
const http = uni.$u.http;

// test get api
export function getUserInfo(params){
	return http.get('/http/getUserInfo', params)
}

// test post api
export function postGoodsInfo(params){
	return http.post('/http/goodInfos', params)
}