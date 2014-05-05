define([
	'dom', 'lib/app', 'lib/map', 'lib/storage', 'map'
], function ($, app, map, storage) {
	"use strict";

	describe('map', function () {

		var $el;

		beforeEach(function (done) {
			$el = $('<div class="map"/>').appendTo('body');
			$el.append('<div class="map-map" style="width: 200px; height: 200px;"/>');
			storage.set('lib_map', {lat: -33.866116, lng: 151.205410, zoom: 10}, done);
		});

		afterEach(function () {
			$el.remove();
		});


		describe('map init', function () {

			it('should add marker to a map', function (done) {

				app.trigger($el, 'lib/layout:changed');

				app.on('map:markerAdd:done', '.map .map-map', check);

				app.trigger($el.find('.map-map'), 'map:markerAdd', ['testMarker', 0, 0, 'test']);


				function check(event) {
					var $map = $(event.target),
						googleMarkers = $map.data('map-googleMarkers');

					expect($map.is('.map-map')).to.be.true;
					expect(googleMarkers).to.be.an('object');
					expect(googleMarkers).to.have.property('testMarker');
					expect(googleMarkers.testMarker.marker).to.be.instanceOf(map.googleMaps.Marker);
					expect(googleMarkers.testMarker.info).to.be.instanceOf(map.googleMaps.InfoWindow);
					done();
				}
			});

		});
	});

});
