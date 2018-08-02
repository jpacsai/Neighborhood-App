export function openInfoWindow(place, events) {

    const lat = place.lat + 0.007;
    const lng = place.lng;

    console.log('infowindow', events)

    return {
        type: 'OPEN_INFO_WINDOW',
        lat,
        lng,
        events
    }
}