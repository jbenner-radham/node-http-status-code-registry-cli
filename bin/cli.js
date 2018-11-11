#!/usr/bin/env node

'use strict';

const chalk = require('chalk');
const httpStatusCodeRegistry = require('http-status-code-registry');
const meow = require('meow');
const path = require('path');
const pkg = require(path.resolve('package.json'));

const bin = path.basename(process.argv.slice(1).shift());
const hrLength = ('http-status-code-registry v'.length + pkg.version.length);
const hr = `${'='.repeat(hrLength)}`;
const helpText = `
    ${chalk.bold('http-status-code-registry')} v${pkg.version}
    ${chalk.dim(hr)}
    Fetches the current HTTP status codes from the IANA registry and displays
    them as JSON.

    Usage
        $ ${bin} [OPTIONS]

    Options
        --help, -h      Display this message.
        --version, -v   Display the unprefixed application version.
`;
const options = {
    description: false,
    flags: {
        help: { alias: 'h' },
        version: { alias: 'v' }
    }
};

meow(helpText, options);

(async () => {
	try {
		console.log(JSON.stringify(await httpStatusCodeRegistry(), null, 4));
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
})();
