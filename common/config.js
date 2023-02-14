const CONFIG = {
	// 开发环境配置
	development: {
		baseUrl: 'https://8553130f-d188-40fd-8274-56ae596e446d.bspapp.com',
	},
	// 生产环境配置
	production: {
		baseUrl: 'https://8553130f-d188-40fd-8274-56ae596e446d.bspapp.com',
	}
}
export default CONFIG[process.env.NODE_ENV];
