<template>
	<view>
		{{JSON.stringify(this.query)}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				query:{}
			}
		},
		onLoad(){
			this.query = this.$Route.query;
			console.log('query:',this.query);
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
