var map = L.map('map').setView([0, 0], 2);
var myIcon = L.icon({
    iconUrl: 'https://www.svgrepo.com/show/170716/international-space-station.svg',
    iconSize: [38, 95],

});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
const mark  = L.marker([0, 0], {icon : myIcon}).addTo(map)
const fSSD = async() => {
    const res = await fetch("https://api.wheretheiss.at/v1/satellites/25544")
    const data = await res.json()
    lats = data.latitude
    long = data.longitude
    console.log(lats, long);
    mark.setLatLng([lats, long])

    // .openPopup();
}

setInterval(fSSD,1000)
