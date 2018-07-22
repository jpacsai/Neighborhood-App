export function filterEvents (e, events, genreFilter, locationFilter) {
    e.preventDefault();
    console.log('filtering action');

    const filteredEvents = [];
        // event._embedded.venues[0].city.name
        // event.classifications[0].genre.name

    // console.log(filteredEvents);

    const message = 'FILTERING_EVENTS';

    
    return filterEventsDispatcher(message, filteredEvents);
}

function filterEventsDispatcher(message, filteredEvents) {
    console.log('filter action despatched')
    return {
        type: message,
        filteredEvents
    }
}