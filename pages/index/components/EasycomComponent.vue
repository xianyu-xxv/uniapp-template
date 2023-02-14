<template>
	<view class="u-page">
		
		<view class="title">cl-icon</view>
		<!--注释掉cl-icon下面组件也将失效-->
		<cl-icon type="iconlaba" size="30" color="#999" />
		<clIcon type="iconlaba" size="30" color="#999" />
		
		<view class="title">cl-test</view>
		
		<!--注释掉cl-test下面组件也将失效-->
		<cl-test />
		<clTest />
		
		<view class="prompt">
			<view>自定义easycom组件，在@/components/xxx/xxx.vue 组件即可无需引用调用</view>
			<view>{{html}}</view>
			<view><a href="https://uniapp.dcloud.io/component/README?id=easycom%e7%bb%84%e4%bb%b6%e8%a7%84%e8%8c%83">eaycom文档</a></view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				inputValue:'hello world!',
				html:`如@/components/cl-test/cl-test.vue，使用时 <cl-test/>正确 <clTest/>错误`
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
	
	.title{
		font-size: 36rpx;
		font-weight: bold;
		margin-top: 15rpx;
	}
</style>
