export function closeUp(event, place) {
    
    const value = true;

    const venue = event ? {
        lat: Number(event._embedded.venues[0].location.latitude),
        lng: Number(event._embedded.venues[0].location.longitude)
    } : {
        lat: place.lat,
        lng: place.lng
    }

    console.log('venue', venue);

    return {
        type: 'TOGGLE_CLOSEUP',
        value,
        venue,
        event
    }
}