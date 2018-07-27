export function resetFiltering(events) {

    return { 
        type: 'CLEAR_FILTERS',
        allEvents: events
    }
}