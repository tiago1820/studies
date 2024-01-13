const map = L.map("map-template").setView([-34.76272681147566, -58.21298632499015], 8);

const socket = io();

const tileURL = "https://b.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tileURL2 = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png';

L.tileLayer(tileURL).addTo(map);

map.locate({ enableHighAccuracy: true });
map.on("locationfound", e => {
    const coords = [e.latlng.lat, e.latlng.lng];
    const marker = L.marker(coords)
    marker.bindPopup("Tu estas aqui!");
    map.addLayer(marker);
    socket.emit("userCoordinates", e.latlng);
});

socket.on("newUserCoordinates", (coords) => {
    console.log("New user is connected");
    const marker = L.marker([coords.lat + 0.5, coords.lng + 0.5]);
    marker.bindPopup("Here There!");
    map.addLayer(marker);
});




