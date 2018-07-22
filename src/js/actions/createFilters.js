export function createFilters(events){ 
    //console.log('creating filters action');
    console.log('creating filters from: ', events);
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
    return createFiltersDispatch(message, allGenres, allLocations);     
}

function createFiltersDispatch(message, allGenres, allLocations) {
    console.log('dispatching filter lists');
    return {
        type: message,
        genres: allGenres,
        locations: allLocations 
    }
}