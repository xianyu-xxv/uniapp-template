<template>
	<view :class="'iconfont ' + type" :style="{ color: color,'line-height':size + 'px', 'font-size': size + 'px' }"
	 @click="_onClick" />
</template>

<script>
	export default {
		name: 'UniIcon',
		props: {
			type: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: '#333333'
			},
			size: {
				type: [Number, String],
				default: 20
			}
		},
		methods: {
			_onClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style>
	@import './iconfont.css';

	.iconfont {
		display: inline-block;
		font-weight: 400;
	}
</style>
