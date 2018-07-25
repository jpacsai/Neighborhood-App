export function filterEvents (e, events, locationFilter) {
    e.preventDefault();

    const filteredEvents = events.filter((event) => event._embedded.venues[0].city.name === locationFilter);
    
    let message;
    let value;
    
    if (filteredEvents.length === 0) {
        message = 'NO_MATCHING_FILTERED_EVENTS';
        value = 'no match found'
    }
    else {
        message = 'FILTERING_EVENTS';
        value = filteredEvents;
    }
    
    return filterEventsDispatcher(message, value);
}

function filterEventsDispatcher(message, value) {
    return {
        type: message,
        filteredEvents: value
    }
}