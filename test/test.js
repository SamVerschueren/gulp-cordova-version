'use strict';

/**
 * Test runner for gulp-cordova-access
 *
 * @author Sam Verschueren      <sam.verschueren@gmail.com>
 * @since  6 Sep. 2015
 */

// module dependencies
var chai = require('chai'),
    tempfile = require('tempfile'),
    fs = require('fs-extra'),
    path = require('path'),
    os = require('os'),
    gutil = require('gulp-util');

// use should flavour
var should = chai.should();

var version = require('../');

describe('gulp-cordova-access', function() {

    beforeEach(function() {
        this.tmp = tempfile();

        fs.copySync(path.join(__dirname, '/fixtures/config.xml'), path.join(this.tmp, 'config.xml'));
    });

    it('Should set the version', function(cb) {
        var tmp = this.tmp;
        var result = [
            '<?xml version=\'1.0\' encoding=\'utf-8\'?>',
            '<widget version="1.0.1">',
            '</widget>'
        ];

        // Create the stream
        var stream = version('1.0.1');

        stream.on('data', function() { });

        stream.on('end', function() {
            var content = fs.readFileSync(path.join(tmp, 'config.xml'), 'utf8');

            // Assert the content
            content.should.be.equal(result.join(os.EOL) + os.EOL);

            cb();
        });

        // Write the file to the stream
        stream.write(new gutil.File({
            cwd: __dirname,
            base: tmp,
            path: tmp,
            stat: fs.statSync(tmp)
        }));

        stream.end();
    });

    it('Should set the android version', function(cb) {
        var tmp = this.tmp;
        var result = [
            '<?xml version=\'1.0\' encoding=\'utf-8\'?>',
            '<widget android-versionCode="231" version="1.0.1">',
            '</widget>'
        ];

        // Create the stream
        var stream = version('1.0.1', {androidVersionCode: 231});

        stream.on('data', function() { });

        stream.on('end', function() {
            var content = fs.readFileSync(path.join(tmp, 'config.xml'), 'utf8');

            // Assert the content
            content.should.be.equal(result.join(os.EOL) + os.EOL);

            cb();
        });

        // Write the file to the stream
        stream.write(new gutil.File({
            cwd: __dirname,
            base: tmp,
            path: tmp,
            stat: fs.statSync(tmp)
        }));

        stream.end();
    });

    it('Should set the iOS bundle version', function(cb) {
        var tmp = this.tmp;
        var result = [
            '<?xml version=\'1.0\' encoding=\'utf-8\'?>',
            '<widget ios-CFBundleVersion="2.3.1" version="1.0.1">',
            '</widget>'
        ];

        // Create the stream
        var stream = version('1.0.1', {iosBundleVersion: '2.3.1'});

        stream.on('data', function() { });

        stream.on('end', function() {
            var content = fs.readFileSync(path.join(tmp, 'config.xml'), 'utf8');

            // Assert the content
            content.should.be.equal(result.join(os.EOL) + os.EOL);

            cb();
        });

        // Write the file to the stream
        stream.write(new gutil.File({
            cwd: __dirname,
            base: tmp,
            path: tmp,
            stat: fs.statSync(tmp)
        }));

        stream.end();
    });

    it('Should set the android version and iOS bundle version', function(cb) {
        var tmp = this.tmp;
        var result = [
            '<?xml version=\'1.0\' encoding=\'utf-8\'?>',
            '<widget android-versionCode="231" ios-CFBundleVersion="2.3.1" version="1.0.1">',
            '</widget>'
        ];

        // Create the stream
        var stream = version('1.0.1', {androidVersionCode: 231, iosBundleVersion: '2.3.1'});

        stream.on('data', function() { });

        stream.on('end', function() {
            var content = fs.readFileSync(path.join(tmp, 'config.xml'), 'utf8');

            // Assert the content
            content.should.be.equal(result.join(os.EOL) + os.EOL);

            cb();
        });

        // Write the file to the stream
        stream.write(new gutil.File({
            cwd: __dirname,
            base: tmp,
            path: tmp,
            stat: fs.statSync(tmp)
        }));

        stream.end();
    });

    it('Should return an error if the version is not valid', function(cb) {
        var tmp = this.tmp;

        // Create the stream
        var stream = version('abc');

        stream.on('error', function(err) {
            err.message.should.be.equal('Please provide a valid version number.');

            cb();
        });

        // Write the file to the stream
        stream.write(new gutil.File({
            cwd: __dirname,
            base: tmp,
            path: tmp,
            stat: fs.statSync(tmp)
        }));

        stream.end();
    });

    it('Should return an error if the android version is not valid', function(cb) {
        var tmp = this.tmp;

        // Create the stream
        var stream = version('1.0.1', {androidVersionCode: 'abc'});

        stream.on('error', function(err) {
            err.message.should.be.equal('Please provide a valid Android version code.');

            cb();
        });

        // Write the file to the stream
        stream.write(new gutil.File({
            cwd: __dirname,
            base: tmp,
            path: tmp,
            stat: fs.statSync(tmp)
        }));

        stream.end();
    });

    it('Should return an error if the android version is not valid', function(cb) {
        var tmp = this.tmp;

        // Create the stream
        var stream = version('1.0.1', {androidVersionCode: 231, iosBundleVersion: 'abc'});

        stream.on('error', function(err) {
            err.message.should.be.equal('Please provide a valid iOS bundle version number.');

            cb();
        });

        // Write the file to the stream
        stream.write(new gutil.File({
            cwd: __dirname,
            base: tmp,
            path: tmp,
            stat: fs.statSync(tmp)
        }));

        stream.end();
    });
});