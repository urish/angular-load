/* angular-load.js / v0.1.2 / (c) 2014 Uri Shaked / MIT Licence */

(function () {
	'use strict';

	angular.module('urish.load', [])
		.service('angularLoad', ['$document', '$q', '$timeout', function ($document, $q, $timeout) {

			/**
			 * Dynamically loads the given script
			 * @param src The url of the script to load dynamically
			 * @returns {*} Promise that will be resolved once the script has been loaded.
			 */
			this.loadScript = function (src) {
				var deferred = $q.defer();
				var script = $document[0].createElement('script');
				script.onload = script.onreadystatechange = function (e) {
					$timeout(function () {
						deferred.resolve(e);
					});
				};
				script.onerror = function (e) {
					$timeout(function () {
						deferred.reject(e);
					});
				};
				script.src = src;
				$document[0].body.appendChild(script);
				return deferred.promise;
			};

			/**
			 * Dynamically loads the given CSS file
			 * @param href The url of the CSS to load dynamically
			 * @returns {*} Promise that will be resolved once the CSS file has been loaded.
			 */
			this.loadCSS = function (href) {
				var deferred = $q.defer();
				var style = $document[0].createElement('link');
				style.rel = 'stylesheet';
				style.type = 'text/css';
				style.href = href;
				style.onload = style.onreadystatechange = function (e) {
					$timeout(function () {
						deferred.resolve(e);
					});
				};
				style.onerror = function (e) {
					$timeout(function () {
						deferred.reject(e);
					});
				};
				$document[0].head.appendChild(style);
				return deferred.promise;
			};
		}]);
})();
