<template>
	<view class="u-page">
		<u-button @click="get1" text="GET请求" size="normal"
			color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))" />
		<u-button @click="post" text="API模块化POST请求" size="normal"
			color="linear-gradient(to right, rgb(220, 194, 11), rgb(4, 151, 99))" />
		<u-button @click="get2" text="Loading GET 请求" size="normal" color="rgb(10, 185, 156)" />
		
		<view class="prompt">
			<view>1. 需在/common/config.js 中修改baseurl为自己服务器域名</view>
			<view>2. 需在/common/http.api.js 中定义自己的接口</view>
			<view>3. H5运行需要自己配置
			<a href="https://blog.csdn.net/weixin_39786582/article/details/109044896">本地代理</a></view>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			get1() {
				this.$api.getSearch({
					keyword: '111'
				}).then(res => {
					// 此处不需要校验code为200 请求拦截器中已判断
					this.$u.toast('获取数据成功');
					console.log('getSearch::', res);
				});
			},
			get2() {
				this.$api.getReqLoading({}).then(res => {
					// 此处不需要校验code为200 请求拦截器中已判断
					this.$u.toast('获取数据成功');
					console.log('getSearch::', res);
				});
			},
			post() {
				this.$api.user.postGoodsInfo().then(res => {
					// 此处不需要校验code为200 请求拦截器中已判断
					this.$u.toast('获取数据成功');
					console.log('postGoodsInfo::', res);
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-page {
		padding: 10px 20px 0px 20px;

		.u-button+.u-button {
			margin-top: 30rpx;
		}
	}
	
	.prompt{
		background-color:rgba(242, 238, 214, 0.4);
		font-size: 28rpx;
		color: #d9063f;
		padding: 5rpx 15rpx 15rpx;
		margin-top: 30rpx;
		border-radius: 8rpx;
		
		&>view{
			margin-top: 10rpx;
		}
	}
</style>
