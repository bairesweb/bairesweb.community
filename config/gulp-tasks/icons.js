const path = require('path');
const paths = require('../paths');

let _ = require('lodash');
let fs = require('fs');
let gulp = require('gulp');
let iconfont = require('gulp-iconfont');
let rename = require('gulp-rename');
let consolidate = require('gulp-consolidate');

/**
 * Get fontawesome icons
 * https://github.com/encharm/Font-Awesome-SVG-PNG/tree/master/black/svg
 */
const iconPath = {
	/**
	 * Directory where gulp should grab the icons
	 */
	src: path.resolve(__dirname, paths.icons + `/*.svg`), // gulp-webpack,
	/**
	 * Template SCSS file
	 */
	template: path.resolve(__dirname, paths.icons + '/iconfont.scss.tpl'),
	/**
	 * Component Path
	 */
	componentPath: path.resolve(__dirname, paths.appSrc + '/components/Icon'),
	json: path.resolve(__dirname, paths.appSrc + '/components/Icon/Icon.json'),
	// outputPath: path.resolve(__dirname, paths.appPublic + '/fonts/'),
	// outputPath: './public/fonts/',
	outputPath: path.resolve(__dirname, paths.appComponents + '/Icon/fonts'),

	version: '1.0'
};

console.log(iconPath.outputPath);
// return;

gulp.task('icons', function() {
	return gulp
		.src(iconPath.src)
		.pipe(
			iconfont({
				fontName: 'bw-icons',
				formats: ['ttf', 'woff', 'woff2', 'svg', 'eot'],
				prependUnicode: true, // add code to file name
				normalize: true,
				fixedWidth: true,
				timestamp: iconPath.version
			})
		)
		.on('glyphs', function(glyphs, options) {
			const sortedGlyphs = _.sortBy(glyphs, function(glyph) {
				return glyph.name;
			});

			const icons = _.reduce(
				sortedGlyphs,
				function(acc, item) {
					acc[item.name] = item.name;
					return acc;
				},
				{}
			);

			fs.writeFile(iconPath.json, JSON.stringify(icons, null, 2));

			// For TS
			// gulp
			// 	.src(paths.icons + '/icontypes.d.ts.tpl')
			// 	.pipe(
			// 		consolidate('lodash', {
			// 			glyphs: glyphs,
			// 			fontName: options.fontName
			// 		})
			// 	)
			// 	.pipe(rename('IconTypes.ts'))
			// 	.pipe(gulp.dest(icons.componentPath));

			gulp
				.src(iconPath.template)
				.pipe(
					consolidate('lodash', {
						glyphs: glyphs,
						fontName: options.fontName,
						fontPath: 'fonts/',
						cssClass: 'bw-icon'
					})
				)
				.pipe(rename('Icon.scss'))
				.pipe(gulp.dest(iconPath.componentPath));
		})
		.pipe(gulp.dest(iconPath.outputPath)); // where to put fonts
});

module.exports = { iconPath };
