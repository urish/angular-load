/* License: MIT.
 * Copyright (C) 2014, Uri Shaked.
 */

'use strict';

module.exports = function (grunt) {
	// load all grunt tasks
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		karma: {
			unit: {
				configFile: 'karma.conf.js',
				singleRun: true
			}
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'angular-load.js',
				'tests.js'
			]
		},
		uglify: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'angular-load.min.js': 'angular-load.js'
				}
			}
		}
	});

	grunt.registerTask('test', [
		'jshint',
		'karma'
	]);

	grunt.registerTask('build', [
		'jshint',
		'uglify'
	]);

	grunt.registerTask('default', ['build']);
};
