export function filtersToApply(title, val) {
    let message = 'ADD_LOCATION_FILTER';
    
    // let message = title === 'Location' ? 'ADD_LOCATION_FILTER' : 'ADD_GENRE_FILTER';

    return filtersToApplyDispatcher(message, val.target.value);
}

function filtersToApplyDispatcher(message, val) {

    return {
        type: message,
        filter: val
    }
}