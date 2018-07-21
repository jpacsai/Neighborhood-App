export function createFilters(e){ 
    const events = e; 

    console.log('hoo', events)
    
    const allGenres = [];
    const allLocations = [];

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
    
    //filterAction(allGenres, allLocations);
    console.log('allGenres: ',allGenres);
    console.log(allLocations);

    return((dispatch) => dispatch(filterAction(allGenres, allLocations)))

    
}

export function filterAction(allGenres, allLocations) {
    console.log('genre filter action', allGenres);
    return {
        type: "FILTERS_CREATED",
        genres: allGenres,
        locations: allLocations
    }
}