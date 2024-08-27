const uploadingMixin = {
	methods: {
		// 删除图片
		deletePic(event) {
			this[`fileList${event.name}`].splice(event.index, 1)
		},
		// 新增图片
		async afterRead(event) {
			// 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
			let lists = [].concat(event.file)
			let fileListLen = this[`fileList${event.name}`].length
			lists.map((item) => {
				this[`fileList${event.name}`].push({
					...item,
					status: 'uploading',
					message: '上传中'
				})
			})
			for (let i = 0; i < lists.length; i++) {
				const result = await this.uploadFilePromise(lists[i].url)
				let item = this[`fileList${event.name}`][fileListLen]
				this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
					status: 'success',
					message: '',
					url: result.url,
					previewUrl: result.fullurl
				}))
				fileListLen++
			}
		},
		uploadFilePromise(url) {
			return new Promise((resolve, reject) => {
				uni.$u.http
					.upload('/api/common/upload', {
						filePath: url,
						name: 'file'
					})
					.then((res) => {
						setTimeout(() => {
							resolve(res.data);
						}, 1000);
					})
					.catch((err) => {});
			});
		},
	}
}

export default uploadingMixin