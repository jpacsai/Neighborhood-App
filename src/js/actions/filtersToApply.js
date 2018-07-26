export function filtersToApply(val) {
    
    let message = 'ADD_LOCATION_FILTER';

    return filtersToApplyDispatcher(message, val.target.name);
}

function filtersToApplyDispatcher(message, val) {

    return {
        type: message,
        filter: val
    }
}