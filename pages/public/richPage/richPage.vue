<template>
	<view>
		<u-parse :content="html" />
	</view>
</template>

<script>

	export default {
		data() {
			return {
				html: ""
			};
		},
		mounted() {
			console.log('this.$Route.query:', this.$Route.query);

			let query = this.$Route.query;
			if (Object.keys(query).length > 0) {
				let ul = '<ul style="font-size:26px;color:#ffaa00;">';
				for (let key in query) {
					ul += `<li>
								<b>key</b>: <i>${key}</i>,
								<b>value:</b> <i>${query[key]}</i>
						   </li>`;
				}
				ul += '</ul>';
				this.html = ul;
			} else {
				this.html = '<h1>什么参数也没有!</h1>';
			}
			
			this.html += '<div></div>'
			console.log('this.html：',this.html);
		}
	}
</script>

<style lang="scss" scoped>
</style>
