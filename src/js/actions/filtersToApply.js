// adds selected filter to state
export function filtersToApply(val, locationFilters) {
    
    const location = val.target.name;
    
    const includesFilter = locationFilters.includes(location)

    const message = includesFilter ? 'REMOVE_LOCATION' : 'ADD_LOCATION';
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