export function openInfoWindow(place, events) {

    const lat = place.lat + 0.007;
    const lng = place.lng;

    return {
        type: 'OPEN_INFO_WINDOW',
        lat,
        lng,
        events
    }
}