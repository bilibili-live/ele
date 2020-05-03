const path = require('path')

const res = _p=> {
	return path.join(__dirname, _p)
}

module.exports = {
	chainWebpack: config => {
		config.resolve.alias
			.set('@', res('./src/'))
			.set('_p', res('./src/pages'))
			.set('_c', res('./src/components'))
	},
	configureWebpack: config => {
		require('@vux/loader').merge(config, {
			plugins: ['vux-ui', {
				name: 'less-theme',
				path: './src/common/theme.less'
			}]
		})
	}
}