<template>
	<view class="u-page">
		<u-input class="u-m-t-30" :value="inputValue" :disabled="true"  placeholder="" border="surround" />
		<u-button  class="u-m-t-30" @click="getDateFormat" text="获取时间" size="normal"
			color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))" />

		<view class="prompt">
			<view>1. 需在/common/extend.js 对Js类型方法进行扩展</view>
			<view>2. 本组件中Date.Format方法非原生实现，为扩展实现，可参照该实现方式将扩展方法统一定义在extend.js</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				inputValue:'',
			}
		},
		methods: {
			getDateFormat(){
				this.inputValue = (new Date()).Format("yyyy-MM-dd hh:mm:ss");
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
