export function createFilters(events){ 

    const allLocations = [];
    const allDates = [];
    const message = 'FILTERLIST_CREATED'

    for (let i = 0; i < events.length; i++) {
        
        const location = events[i]._embedded.venues[0].city.name;
        const date = events[i].dates.start.localDate;

        const dateFormat = new Date(date.slice(0,4), parseInt(date.slice(5, 7), 10), parseInt(date.slice(8,10), 10));

        if (allLocations.includes(location) === false) {
            allLocations.push(location);
        }

        if (allDates.includes(dateFormat) === false) {
            allDates.push(dateFormat);
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