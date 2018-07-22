export function filterAction (events, title, val) {
    console.log('filtering action');
    let filteredEvents = [];
    if (title === 'Location') {
        filteredEvents = events.filter(event => {
            return event._embedded.venues[0].city.name === val.target.value;
        });
        console.log(filteredEvents);
    }
    else if (title === 'Genre') {
        filteredEvents = events.filter(event => {
            return event.classifications[0].genre.name === val.target.value;
        });
        console.log(filteredEvents);
    }

    const message = title === 'Location' ? 'FILTER_LOCATION' : 'FILTER_GENRE';

    /*
    if (val.hasOwnProperty('target')) {
        const value = val.target.value;
        return (dispatch) => {
            console.log('filter action') 
            return dispatch(filterActionDespatch(message, value));
        };*/

    console.log('filter action despatched')
    return filterEventsDispatcher(message, filteredEvents);
}

function filterEventsDispatcher(message, filteredEvents) {
    return {
        type: message,
        filteredEvents
    }
}