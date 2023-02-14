<template>
	<view class="u-page">
		<u-input v-model="inputValue"  placeholder="请输入内容" border="surround" />

		<u-button class="u-m-t-30" @click="utilsAdd" text="全局Tools 转大写" size="normal"
			color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))" />
		
		<view class="prompt">
			<view>1. 需在/common/tools.js 定义方法</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				inputValue:'hello world!',
			}
		},
		methods: {
			utilsAdd(){
				uni.$u.toast(this.$t.toUpperCase(this.inputValue));
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
	
	.u-m-t-30{
		margin-top: 15rpx;
	}
</style>
