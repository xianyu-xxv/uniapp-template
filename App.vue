<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			updateManager.onCheckForUpdate(function(res) {
				console.log(res.hasUpdate); // 检查是否有新版本
			});
			updateManager.onUpdateReady(function() {
				wx.showModal({
					title: '更新提示',
					content: '新版本已经准备好，是否重启应用？',
					success(res) {
						if (res.confirm) {
							updateManager.applyUpdate(); // 应用新版本并重启
						}
					}
				});
			});
			updateManager.onUpdateFailed(function() {
				console.log('新版本下载失败'); // 处理下载失败
			});
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "@/uni_modules/uview-ui/index.scss";
	@import '/static/style/onlylee.scss';
	// 定位
	.labFixed {
	    display: flex;
	    position: fixed;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    padding-bottom: 0;
	    padding-bottom: constant(safe-area-inset-bottom);
	    padding-bottom: env(safe-area-inset-bottom);
	}
</style>