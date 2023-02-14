<template>
	<view style="padding: 15px 15px 40px 15px;">
		<view class="u-page">
			<cl-icon type="iconlaba" size="30" color="#999" />
			<cl-icon type="iconlaba" size="30" color="#888" />
			<cl-icon type="iconlaba" size="30" color="#777" />
			<cl-icon type="iconlaba" size="30" color="#666" />
			<cl-icon type="iconlaba" size="30" color="#555" />
			<cl-icon type="iconlaba" size="30" color="#444" />
			<cl-icon type="iconlaba" size="30" color="#333" />
			<cl-icon type="iconlaba" size="30" color="#222" />
			<cl-icon type="iconlaba" size="30" color="#111" />
		</view>
		
		<view class="prompt">
			<view>1. 在<a href="https://www.iconfont.cn/">阿里矢量图标库</a>创建项目</view>
			<view>2. 添加你所需要使用的图标文件</view>
			<view>3. 下载文件到本地后替换@/components/cl-icon中文件</view>
		</view>
	</view>
	
</template>

<style scoped lang="scss">
	
	.u-page {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	
	.u-page>view{
		width: 33%;
		text-align: center;
		margin-top: 30rpx;
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
