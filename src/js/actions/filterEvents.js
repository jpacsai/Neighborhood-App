export function filterEvents (e, events, genreFilter, locationFilter) {
    e.preventDefault();

    const filteredEvents = events.filter((event) => event.classifications[0].genre.name === genreFilter && event._embedded.venues[0].city.name === locationFilter)
        // event._embedded.venues[0].city.name
        // event.classifications[0].genre.name

    console.log(filteredEvents);

    let message;
    let value;
    
    if (filteredEvents.length === 0) {
        message = 'NO_MATHING_FILTERED_EVENTS';
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