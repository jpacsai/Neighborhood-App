export function openMarkerWindow(venue) {
    
    const eventsArr = venue.eventsArray;

    console.log('arr:', eventsArr)
    return {
        type: 'OPEN_MARKER_WINDOW',
        eventsArr,
        venue
    }
}