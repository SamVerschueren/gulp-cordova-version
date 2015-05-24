# gulp-cordova-version

> Sets the version in the config.xml of the cordova project.

## Installation

```bash
npm install --save-dev gulp-cordova-version
```

## Usage

```JavaScript
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

## API

### version(version)

#### name

*Required*  
Type: `string`

The version of the application in the format `x.y.z`.

## Related

See [`gulp-cordova`](https://github.com/SamVerschueren/gulp-cordova) for the full list of available packages.

## Contributors

- Sam Verschueren [<sam.verschueren@gmail.com>]

## License

MIT © Sam Verschueren
