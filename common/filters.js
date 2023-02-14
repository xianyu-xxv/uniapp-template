import Vue from 'vue';
let vm = new Vue();

// 测试过滤器
export function toUpperCase(arg) {
	return arg && arg.toUpperCase();
}
