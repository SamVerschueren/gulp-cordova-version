# gulp-cordova-version

[![Build Status](https://travis-ci.org/SamVerschueren/gulp-cordova-version.svg?branch=master)](https://travis-ci.org/SamVerschueren/gulp-cordova-version)
[![Coverage Status](https://coveralls.io/repos/SamVerschueren/gulp-cordova-version/badge.svg?branch=master&service=github)](https://coveralls.io/github/SamVerschueren/gulp-cordova-version?branch=master)

> Sets the version in the config.xml of the cordova project.

## Installation

```bash
npm install --save-dev gulp-cordova-version
```

## Usage

```javascript
var gulp = require('gulp'),
    create = require('gulp-cordova-create'),
    version = require('gulp-cordova-version');

gulp.task('build', function() {
    return gulp.src('dist')
        .pipe(create())
        .pipe(version('2.3.1'));
});
```

This will set the version attribute in the `config.xml` file.

> Tip: You can use the version of your `package.json` file and call the plugin with `version(require('./package.json').version)`.

It is also possible to pass in a second object to set the `android-versionCode` and `ios-CFBundleVersion` in your `config.xml` file.

```javascript
gulp.task('build', function() {
    return gulp.src('dist')
        .pipe(create())
        .pipe(version('2.3.1', {androidVersionCode: 231, iosBundleVersion: '2.3.1'}));
});
```

## API

### version(version, [versionCodes])

#### version

*Required*
Type: `string`

The version of the application in the format `x.y.z`.

#### versionCodes

Type: `object`

Object with two optional properties to set specific platform version codes. To set the version code for android, use the `androidVersionCode`
property. To set the CFBundleVersion in iOS, use the `iosBundleVersion` property.

## Related

See [`gulp-cordova`](https://github.com/SamVerschueren/gulp-cordova) for the full list of available packages.

## Contributors

- Sam Verschueren [<sam.verschueren@gmail.com>]

## License

MIT © Sam Verschueren
