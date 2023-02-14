<template>
    <z-paging ref="paging" v-model="dataList" @query="queryList">
		<!-- z-paging默认铺满全屏，此时页面所有view都应放在z-paging标签内，否则会被盖住 -->
		<!-- 需要固定在页面顶部的view请通过slot="top"插入，包括自定义的导航栏 -->
		
		<view slot="top" class="header">
			<u-tabs :list="tabList" @click="tabClick" :activeStyle="{
				color: '#3c9cff',
			}" />
		</view>
			
		
        <view class="item" v-for="(item,index) in dataList" :key="index">
            <view class="item-title">标题{{index}}</view>
			<view class="item-content">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure animi libero eaque corrupti aliquid impedit provident velit rem, officia laboriosam neque beatae id, odio deleniti? Reiciendis libero sint tempora odit.
			</view>
        </view>
    </z-paging>
</template>

<script>
    export default {
        data() {
            return {
				tabList: [{
					name: '页签1',
				}, {
					name: '页签2',
				}, {
					name: '页签3'
				}],
                dataList: []
            };
        },
        methods: {
			tabClick(e) {
				this.$refs.paging.reload(true);
			},
            queryList(pageNo, pageSize) {
				setTimeout(()=>{
					this.$refs.paging.complete(new Array(10).fill().map((item,i)=>{
						return{
							title:i
						}
					}));
				},500)
				
            }
        },
    };
</script>

<style scoped>
	
	.header{
		padding-bottom: 30rpx;
		border-bottom: 1px solid #e2e2e2;
	}
	.item{
		padding: 30rpx;
		border-bottom: 1px solid #e2e2e2;
	}
	
</style>