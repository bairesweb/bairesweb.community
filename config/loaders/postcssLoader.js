const autoprefixer = require('autoprefixer');
const browserlist = require('../../package.json').browserlist;

module.exports = options => ({
	loader: require.resolve('postcss-loader'),
	options: Object.assign(
		{
			ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
			plugins: () => [
				require('postcss-flexbugs-fixes'),
				autoprefixer({
					browsers: browserlist,
					flexbox: 'no-2009'
				})
			]
		},
		options || {}
	)
});
