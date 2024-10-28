function createMap(){
    var map = L.map('map').setView([38.7946, -106.5348], 3);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([randomLatitude,randomLongitude]).addTo(map);
    var marker = L.marker([randomLatitude2,randomLongitude2]).addTo(map);
    var marker = L.marker([randomLatitude3,randomLongitude3]).addTo(map);

    //locality for Marker 1
fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${randomLatitude}&longitude=${randomLongitude}&localityLanguage=en`)
.then(response => response.json())
.then(data => {
    document.getElementById('local1').innerHTML = data.locality
})

//locality for Marker 2
fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${randomLatitude2}&longitude=${randomLongitude2}&localityLanguage=en`)
.then(response => response.json())
.then(data => {
    document.getElementById('local2').innerHTML = data.locality
})


//locality for Marker 3
fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${randomLatitude3}&longitude=${randomLongitude3}&localityLanguage=en`)
.then(response => response.json())
.then(data => {
    document.getElementById('local3').innerHTML = data.locality
})
}

function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
    }

var randomLatitude=document.getElementById('mark1Lat').innerHTML=getRandomInRange(30, 35, 3)
var randomLongitude=document.getElementById('mark1Long').innerHTML=getRandomInRange(-90, -100, 3)
var randomLatitude2=document.getElementById('mark2Lat').innerHTML=getRandomInRange(30, 35, 3)
var randomLongitude2=document.getElementById('mark2Long').innerHTML=getRandomInRange(-90, -100, 3)
var randomLatitude3=document.getElementById('mark3Lat').innerHTML=getRandomInRange(30, 35, 3)
var randomLongitude3=document.getElementById('mark3Long').innerHTML=getRandomInRange(-90, -100, 3)


fetch('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en')
    .then(res=>res.json())
    .then(data=>console.log(data))




window.onload=createMap