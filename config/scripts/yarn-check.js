'use strict';

const execSync = require('child_process').execSync;
const chalk = require('chalk');

try {
	execSync('yarn check --integrity').toString();
} catch (error) {
	console.log(
		'\n' +
			chalk.red(
				`  This project uses ${chalk.underline.bold(
					'yarn'
				)} to install all JavaScript dependencies.\n`
			) +
			chalk.red(
				`  Please don't modify the dependencies manually in package.json nor use npm install to update them.\n`
			) +
			chalk.dim('    Please run ') +
			chalk.reset('yarn add [package-name]') +
			chalk.dim(' to install any new dependency\n') +
			chalk.dim('    or') +
			chalk.reset(' yarn upgrade [package@version]') +
			chalk.dim(' to upgrade a dependency to a specific version.\n') +
			chalk.dim('    Ensure you commit both the package.json and the yarn.lock files together.\n') +
			chalk.dim('    Check out ') +
			chalk.underline.blue('https://yarnpkg.com/en/docs/cli/') +
			chalk.dim(' for more information.') +
			`\n`
	);
	process.exit(1);
	throw error;
}
