export function closeUp(place) {
    
    const value = true;

    const lat = place.lat;
    const lng = place.lng;

    return {
        type: 'START_CLOSEUP',
        value,
        lat,
        lng
    }
}