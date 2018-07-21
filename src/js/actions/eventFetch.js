export function loadData(){
    let date = new Date();
    let month = (date.getMonth()+1) + '';
    month = month.length < 2 ? '0' + month : month;
    const today = date.getFullYear() + '-' + month + '-' + date.getDate();

    date.setDate(date.getDate() + 7);
    month = (date.getMonth()+1) + '';
    month = month.length < 2 ? '0' + month : month;

    const nextWeek = date.getFullYear() + '-' + month + '-' + date.getDate();

    const url = 'https://app.ticketmaster.com/discovery/v2/events.JSON?apikey=GEKqrkYNGL9POROireeB9D6fzdpWP8dj&page=0&size=50&marketId=204&startDateTime=' + today + 'T00:00:00Z&endDateTime=' + nextWeek + 'T23:59:00Z&includeTBA=no&includeTBD=no';

    return(dispatch)=>{
        return fetch(url)
        .then(res => res.json())
        .then((response)=>{
            dispatch(createFilters(response));
            dispatch(eventAction(response));
        })
        .catch(function() {
            console.log("error");
        })
    }
}

export function createFilters(e){ 
    const events = e._embedded.events; 

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

export function eventAction(response) {
    console.log('load data success');
    return{
        type:"EVENT_SUCCESS",
        events: response._embedded.events
    }
}

export function filterAction(allGenres, allLocations) {
    console.log('genre filter action', allGenres);
    return {
        type: "FILTERS_CREATED",
        genres: allGenres,
        locations: allLocations
    }
}