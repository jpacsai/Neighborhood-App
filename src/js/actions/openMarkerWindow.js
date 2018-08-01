export function openMarkerWindow(venue) {
    const eventsArr = venue.eventsArray;

    return {
        type: 'OPEN_MARKER_WINDOW',
        eventsArr
    }
}