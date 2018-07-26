export function filtersToApply(val, locationFilters) {
    
    const location = val.target.name;
    
    const includesFilter = locationFilters.includes(location)

    const message = includesFilter ? 'REMOVE_LOCATION_FILTER' : 'ADD_LOCATION_FILTER';
    const index = includesFilter ? locationFilters.indexOf(location) : null;

    return filtersToApplyDispatcher(message, location, index);
}

function filtersToApplyDispatcher(message, location, index) {

    return {
        type: message,
        filter: location,
        index
    }
}