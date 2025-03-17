Changelog
=========
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

[0.2.0] - 2025-03-17
--------------------
### Changed
- Upgraded `http-status-code-registry` dependency and changed required Node.js version to v18+.

### Fixed
- Parsing of quoted commas in the CSV retrieved from IANA (via upgraded `http-status-code-registry`).

[0.1.4] - 2018-11-11
--------------------
### Fixed
- Fixed resolution of `package` and added a fallback if resolution does fail.

[0.1.3] - 2018-11-11
--------------------
### Fixed
- Moved `meow` from `package.devDependencies` to `package.dependencies`.

[0.1.2] - 2018-11-11
--------------------
### Fixed
- Added missing directory to the `package.bin['http-status-code-registry']` mapping.

[0.1.1] - 2018-11-11
--------------------
### Fixed
- ~~Added missing directory to the `package.bin['http-status-code-registry']` mapping.~~

[0.1.0] - 2018-11-11
--------------------
### Added
- Initial release.

[0.2.0]: https://github.com/jbenner-radham/node-http-status-code-registry-cli/compare/v0.1.4...v0.2.0
[0.1.4]: https://github.com/jbenner-radham/node-http-status-code-registry-cli/compare/v0.1.3...v0.1.4
[0.1.3]: https://github.com/jbenner-radham/node-http-status-code-registry-cli/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/jbenner-radham/node-http-status-code-registry-cli/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/jbenner-radham/node-http-status-code-registry-cli/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/jbenner-radham/node-http-status-code-registry-cli/releases/tag/v0.1.0
