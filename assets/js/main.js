const map = L.map('map');
// Get the tile layer from OpenStreetMaps
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

// Specify the maximum zoom of the map
maxZoom: 19,

// Set the attribution for OpenStreetMaps
attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
.addTo(map);

// Set the view of the map
// with the latitude, longitude and the zoom value
map.setView([52.0858,7.6058], 12);

//map.locate({setView: true, maxZoom: 16});

// Show a market at the position of the Eiffel Tower
let eiffelMarker = L.marker([52.0858,7.6058]).addTo(map);
 
// Bind popup to the marker with a popup
eiffelMarker.bindPopup("River Aa- Proposed Project").openPopup();


