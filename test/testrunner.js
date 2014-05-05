(function () {
	"use strict";

	require.config({
		baseUrl: '../js',
		paths: {
			bwr: '../bower',
			underscore: '../bower/underscore/underscore',
			dom: '../bower/jquery/dist/jquery',

			test: '../test',
			mocha: '../bower/mocha/mocha',
			chai: '../bower/chai/chai',

			'lib/app': '../bower/core/js/app',

			'lib/storage': '../bower/storage/js/storage',
			'vendor/storage-polyfill': '../bower/storage/js/vendor/storage-polyfill',
			'entity/from-json': '../bower/storage/js/entity/from-json',

			'lib/map': 'init',
			'map': 'map'
		},
		shim: {
			underscore: {
				exports: '_'
			},
			dom: {
				exports: 'jQuery'
			},
			mocha: {
				exports: 'mocha'
			},
			chai: {
				exports: 'chai'
			}
		},
		map: {
			'*': {
				'vendor/require/async': 'bwr/requirejs-plugins/src/async'
			}
		},
		config: {
			'lib/app': {
				debug: true
			}
		}
	});

	require([
		'mocha', 'chai'
	], function (mocha, chai) {
		mocha.ui('bdd');
		window.expect = chai.expect;
		require([
			'test/lib/init',
			'test/lib/map'
		], function () {
			if (window.mochaPhantomJS) {
				mochaPhantomJS.run();
			} else {
				mocha.run();
			}
		});
	});


})();
