<template>
	<view class="u-page">
		<u-input v-model="inputValue" placeholder="请输入内容" border="surround" />

		<u-button class="u-m-t-30" @click="getStoreValue" text="获取Store数据" size="normal"
			color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))" />
		<u-button @click="setStoreValue" text="赋值Store数据" size="normal"
			color="linear-gradient(to right, rgb(220, 194, 11), rgb(4, 151, 99))" />

		<view class="prompt">
			<view>1. store中所有state都将会被直接混入到(页面/组件)中</view>
			<view>2. store中state属性定义时须加前缀或者大写来避免命名重复</view>
			<view>3. @/store/index.js中saveStateKeys如果定义将会本地存储，下次启动会自动从缓存中取得</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputValue: "",
			}
		},
		mounted() {
			this.inputValue = this.vuex_token;
		},
		methods: {
			getStoreValue() {
				uni.$u.toast(`vuex_token:${this.vuex_token}`);
			},
			setStoreValue() {
				uni.$u.vuex('vuex_token', this.inputValue);
				uni.$u.toast(`持久化存储vuex_token成功`);
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

	.prompt {
		background-color: rgba(242, 238, 214, 0.4);
		font-size: 28rpx;
		color: #d9063f;
		padding: 5rpx 15rpx 15rpx;
		margin-top: 30rpx;
		border-radius: 8rpx;

		&>view {
			margin-top: 10rpx;
		}
	}

	.u-m-t-30 {
		margin-top: 15rpx;
	}
</style>
