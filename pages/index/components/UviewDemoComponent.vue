<template>
	<view class="u-page">
		<view class="prompt">
			<view>此处只是成功引入Uview的展示更多使用方式参照<a href="https://www.uviewui.com/components/intro.html">2.0文档</a></view>
		</view>
		
		<view class="u-demo-block">
			<text class="u-demo-block__title">按钮类型</text>
			<view class="u-demo-block__content">
				<view class="u-page__button-item">
					<u-button text="默认按钮" size="normal" type="info"></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button text="成功按钮" size="normal" type="success"></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button text="危险按钮" size="normal" type="error"></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button text="主要按钮" size="normal" type="primary"></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button text="警告按钮" size="normal" type="warning"></u-button>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">镂空按钮</text>
			<view class="u-demo-block__content">
				<view class="u-page__button-item">
					<u-button text="镂空按钮" size="normal" type="info" plain></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button text="镂空按钮" size="normal" type="success" plain></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button text="镂空按钮" size="normal" type="error" plain></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button text="镂空按钮" size="normal" type="primary" plain></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button text="镂空按钮" size="normal" type="warning" plain></u-button>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">细边按钮</text>
			<view class="u-demo-block__content">
				<view class="u-page__button-item">
					<u-button text="细边按钮" size="normal" type="info" plain hairline></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button text="细边按钮" size="normal" type="success" plain hairline></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button text="细边按钮" size="normal" type="error" plain hairline></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button text="细边按钮" size="normal" type="primary" plain hairline></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button text="细边按钮" size="normal" type="warning" plain hairline></u-button>
				</view>
			</view>
		</view>

		<view class="u-demo-block">
			<text class="u-demo-block__title">禁用按钮</text>
			<view class="u-demo-block__content">
				<view class="u-page__button-item">
					<u-button disabled text="禁用按钮" size="normal" type="info"></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button disabled text="禁用按钮" size="normal" type="success"></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button disabled text="禁用按钮" size="normal" type="error"></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button disabled text="禁用按钮" size="normal" type="primary"></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button disabled text="禁用按钮" size="normal" type="warning"></u-button>
				</view>
			</view>
		</view>

		<view class="u-demo-block">
			<text class="u-demo-block__title">加载中</text>
			<view class="u-demo-block__content">
				<view class="u-page__button-item">
					<u-button loadingText="加载中" size="normal" loading loadingMode="circle" type="success"></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button class="button-layout__item" loadingText="加载中" size="normal" loading type="error">
					</u-button>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">按钮图标&按钮形状</text>
			<view class="u-demo-block__content">
				<view class="u-page__button-item">
					<u-button text="按钮图标" size="normal" icon="map" plain type="warning"></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button text="按钮图标" size="normal" plain shape="circle" type="success"></u-button>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义颜色</text>
			<view class="u-demo-block__content">
				<view class="u-page__button-item">
					<u-button text="渐变色按钮" size="normal"
						color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button text="渐变色按钮" size="normal"
						color="linear-gradient(to right, rgb(220, 194, 11), rgb(4, 151, 99))"></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button text="青绿色按钮" size="normal" color="rgb(10, 185, 156)"></u-button>
				</view>
			</view>
		</view>

		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义大小</text>
			<view class="u-demo-block__content"
				style="padding-bottom: 15px; flex-direction: column;align-items: stretch;flex-wrap: nowrap;">
				<u-button text="超大尺寸" size="large" type="success"></u-button>
			</view>
			<view class="u-demo-block__content">
				<view class="u-page__button-item">
					<u-button text="普通尺寸" size="normal" type="error"></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button text="小型尺寸" size="small" type="primary"></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button class="button-layout__item" text="超小尺寸" size="mini" type="warning"></u-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// type: 'default',
				// disabled: false
			}
		},
		onLoad() {
			setTimeout(() => {
				this.type = 'primary'
				this.disabled = true
			}, 2000)
		}
	}
</script>

<style lang="scss" scoped>
	.u-view {
		padding: 40px 20px 0px 20px;
		&__title {
			font-size: 14px;
			color: rgb(143, 156, 162);
			margin-bottom: 10px;
		}
	}
	
	.u-block{
		padding: 14px;
		&__section{
			margin-bottom:10px;
		}
		&__title {
			margin-top:10px;
			font-size: 15px;
			color: $u-content-color;
			margin-bottom:10px;
		}
		&__flex{
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
		}
	}
	
	// 使用了cell组件的icon图片样式
	.u-cell-icon {
		width: 36rpx;
		height: 36rpx;
		margin-right: 8rpx;
	}
	
	.u-page {
		padding: 15px 15px 40px 15px;
	}
	
	.u-demo-block {
		flex: 1;
		margin-bottom: 23px;
		
		&__content {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			// flex-direction: row!important;
			// align-items: center;
			// flex-wrap: wrap;
		}
		
		&__title {
			font-size: 14px;
			color: rgb(143, 156, 162);
			margin-bottom: 8px;
		}
	}
	
	
	
	.u-page {
		&__button-item {
			margin: 0 15px 15px 0;
		}
	}

	.u-demo-block__content {
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
	}
	
	.prompt {
		background-color: rgba(242, 238, 214, 0.4);
		font-size: 28rpx;
		color: #d9063f;
		padding: 5rpx 15rpx 15rpx;
		margin-bottom: 30rpx;
		border-radius: 8rpx;
	
		&>view {
			margin-top: 10rpx;
		}
	}
</style>
