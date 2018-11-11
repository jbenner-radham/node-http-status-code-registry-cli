http-status-code-registry-cli
=============================
[![npm](https://img.shields.io/npm/v/http-status-code-registry-cli.svg?style=flat-square)](https://www.npmjs.com/package/http-status-code-registry-cli)
[![node](https://img.shields.io/node/v/http-status-code-registry-cli.svg?style=flat-square)](https://nodejs.org/)
[![license](https://img.shields.io/github/license/jbenner-radham/node-http-status-code-registry-cli.svg?style=flat-square)](LICENSE)

A CLI app to fetch the current HTTP status codes from the IANA registry and displays them as JSON.

Install
-------
```sh
$ yarn global add http-status-code-registry-cli # Or alternatively: `npm install --global http-status-code-registry-cli`
```

Usage
-----
```sh
$ http-status-code-registry --help

  http-status-code-registry v<MAJOR>.<MINOR>.<PATCH>
  ==================================================
  Fetches the current HTTP status codes from the IANA registry and displays
  them as JSON.

  Usage
      $ http-status-code-registry [OPTIONS]

  Options
      --help, -h      Display this message.
      --version, -v   Display the unprefixed application version.
```

Testing
-------
```sh
$ yarn test # Or alternatively: `npm test`
```

See Also
--------
- [http-status-code-registry @ npm](https://www.npmjs.com/package/http-status-code-registry)

License
-------
The MIT License (Expat). See the [license file](LICENSE) for details.
