define([
	'dom', 'lib/app', 'lib/map', 'lib/storage'
], function ($, app, map, storage) {
	"use strict";
	describe('lib/map', function () {

		var $el;

		beforeEach(function (done) {
			$el = $('<div style="width: 1000px; height: 1000px;"/>').appendTo('body');
			storage.set('lib_map', {lat: -33.866116, lng: 151.205410, zoom: 14}, done);
		});
		afterEach(function () {
			$el.remove();
		});

		describe('map init', function () {

			it('should create google map instance for specific element and return it in callback', function (done) {
				map($el, function (error, googleMap) {
					expect(googleMap).to.be.an('object');
					expect(googleMap).to.be.instanceOf(map.googleMaps.Map);
					done();
				});
			});

			it('should add reference for a map into element\'s data', function (done) {
				map($el, function (error, googleMap) {
					expect($el.data('lib_map')).to.be.an('object');
					expect($el.data('lib_map')).to.be.instanceOf(map.googleMaps.Map);
					expect($el.data('lib_map')).to.be.equal(googleMap);
					done();
				});
			});


		});
	});

});
