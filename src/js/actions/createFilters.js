export function createFilters(events){ 

    const allGenres = [];
    const allLocations = [];
    const message = 'FILTERLIST_CREATED'

    for (let i = 0; i < events.length; i++) {
        const genre = events[i].classifications[0].genre.name;
        const location = events[i]._embedded.venues[0].city.name;
        if (allGenres.includes(genre) === false) {
            allGenres.push(genre);
        }
        if (allLocations.includes(location) === false) {
            allLocations.push(location);
        }
    }
    
    return createFiltersDispatcher(message, allGenres, allLocations);     
}

function createFiltersDispatcher(message, allGenres, allLocations) {
    return {
        type: message,
        genres: allGenres,
        locations: allLocations 
    }
}