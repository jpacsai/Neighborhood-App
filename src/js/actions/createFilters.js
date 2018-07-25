export function createFilters(events){ 

    const allLocations = [];
    const allDates = [];
    const message = 'FILTERLIST_CREATED'

    for (let i = 0; i < events.length; i++) {
        
        const location = events[i]._embedded.venues[0].city.name;
        const date = events[i].dates.start.localDate;

        if (allLocations.includes(location) === false) {
            allLocations.push(location);
        }

        if (allDates.includes(date) === false) {
            allDates.push(date);
        }
    }

    console.log(allDates);
    
    return createFiltersDispatcher(message, allLocations, allDates);     
}

function createFiltersDispatcher(message, allLocations, allDates) {
    return {
        type: message,
        locations: allLocations,
        dates: allDates
    }
}