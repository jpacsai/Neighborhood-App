var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 46.883448, lng: 17.437112},
        zoom: 13
    });
    var tapolca = {lat: 46.883448, lng: 17.437112};
    var marker = new google.maps.Marker({
        position: tapolca,
        map: map,
        title: "Home :)"
    });
    var infowindow = new google.maps.InfoWindow({
        content: "Hello World!"
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    })
}