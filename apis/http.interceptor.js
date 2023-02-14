// common/http.interceptor.js

import projectConfig from '@/common/config.js';

const codeMessage = {
	404: '您所请求的资源无法找到',
	500: '服务器内部错误，无法完成请求',
};

const install = (Vue, vm) => {
	// 这个配置是一次配置，全局通用的，具体参数见 https://www.uviewui.com/js/http.html
	uni.$u.http.setConfig((config)=>{
		// 域名设置
		config.baseURL = projectConfig.baseUrl;
		// 全局header
		config.header = {};
		// 
		config.method = '';
		// 设置为json，返回后会对数据进行一次JSON.parse()
		config.dataType = 'json';
		// 
		config.responseType = 'text';
		// 注：如果局部custom与全局custom有同名属性，则后面的属性会覆盖前面的属性，相当于Object.assign(全局，局部)
		config.custom = {
			// 请求接口展示Loading
			ShowLoading: true,
			// Loading中是否遮罩
			LoadingMask: true,
			// Loading文本
			LoadingText: '正在加载',
		}; // 全局自定义参数默认值
		// #ifdef H5 || APP-PLUS || MP-ALIPAY || MP-WEIXIN
		config.timeout = 60000;
		// #endif
		// #ifdef APP-PLUS
		// 验证 ssl 证书 仅5+App安卓端支持（HBuilderX 2.3.3+）
		config.sslVerify = true;
		// #endif
		// #ifdef H5
		// 跨域请求时是否携带凭证（cookies）仅H5支持（HBuilderX 2.6.15+）
		config.withCredentials = false;
		// #endif
		// #ifdef APP-PLUS
		// DNS解析时优先使用ipv4 仅 App-Android 支持 (HBuilderX 2.8.0+)
		config.firstIpv4 = false; 
		// #endif
		// 局部优先级高于全局，返回当前请求的task,options。请勿在此处修改options。非必填
		// getTask: (task, options) => {
		// 相当于设置了请求超时时间500ms
		//   setTimeout(() => {
		//     task.abort()
		//   }, 500)
		// },
		// 全局自定义验证器。参数为statusCode 且必存在，不用判断空情况。
		config.validateStatus = (statusCode) => { // statusCode 必存在。此处示例为全局默认配置
			return statusCode >= 200 && statusCode < 300
		};
		return config;
	});

	// 请求拦截部分，如配置，每次请求前都会执行
	uni.$u.http.interceptors.request.use((config) => {
		
		if(config.custom.ShowLoading){
			uni.showLoading({
			    title: config.custom.LoadingText || '正在加载',
				mask: config.custom.LoadingMask || false
			});
		}
		// 引用token
		// 方式一，存放在vuex的token，假设使用了uView封装的vuex方式
		// 见：https://uviewui.com/components/globalVariable.html
		// config.header.token = vm.token;

		// 方式二，如果没有使用uView封装的vuex方法，那么需要使用$store.state获取
		// config.header.token = vm.$store.state.token;

		// 方式三，如果token放在了globalData，通过getApp().globalData获取
		// config.header.token = getApp().globalData.username;

		// 方式四，如果token放在了Storage本地存储中，拦截是每次请求都执行的
		// 所以哪怕您重新登录修改了Storage，下一次的请求将会是最新值
		// const token = uni.getStorageSync('token');
		// config.header.token = token;
		config.header.Token = 'xxxxxx';

		// 可以对某个url进行特别处理，此url参数为this.$u.get(url)中的url值
		if (config.url == '/user/login') config.header.noToken = true;
		// 最后需要将config进行return
		return config;
		// 如果return一个false值，则会取消本次请求
		// if(config.url == '/user/rest') return false; // 取消某次请求
	})

	// 响应拦截，如配置，每次请求结束都会执行本方法
	uni.$u.http.interceptors.response.use((res) => {
		
		if(res.config.custom.ShowLoading){
			uni.hideLoading();
		}
		
		// if 状态码是否正常
		if (res.statusCode == 200) {
			let result = res.data;
			// if 与后台规定的成功码是否正常
			if (result.code == 200) {
				return result.result || result.data;
			} else if (result.code == 300) {
				vm.$u.toast('未登录!');
			} else {
				vm.$u.toast(result.msg);
			}
		} else {
			let errorMessage = codeMessage[res.statusCode] ? codeMessage[res.statusCode] : res.statusCode;
			vm.$u.toast(errorMessage);
		}
		return false;
	});
}

export default {
	install
}
