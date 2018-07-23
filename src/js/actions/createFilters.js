export function createFilters(events){ 

    const allLocations = [];
    const message = 'FILTERLIST_CREATED'

    for (let i = 0; i < events.length; i++) {
        
        const location = events[i]._embedded.venues[0].city.name;

        if (allLocations.includes(location) === false) {
            allLocations.push(location);
        }
    }
    
    return createFiltersDispatcher(message, allLocations);     
}

function createFiltersDispatcher(message, allLocations) {
    return {
        type: message,
        locations: allLocations 
    }
}