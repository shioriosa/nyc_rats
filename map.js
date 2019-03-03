'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpb3Jpb3NhIiwiYSI6ImNqb3hmam5rZjI4NXEzcHB0MHRja213azEifQ.0LM_5mPLzwG7yq6QHBJqxQ'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/shioriosa/cjss8nnuz696a1gqgpztmrqva',
    center: [-73.96216,40.80779],
    zoom: 12
})

let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})
map.addControl(navigation, 'top-left')

let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})
map.addControl(scale, 'bottom-right')

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})
map.addControl(geolocate, 'top-left')

geolocate.on('geolocate', function(event) {

})



