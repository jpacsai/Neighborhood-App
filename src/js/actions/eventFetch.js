export default function loadData(){
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
            const filters = createFilters(response._embedded.events);
            dispatch(eventActionDispatch(response, filters));
        })
        .catch(function() {
            console.log("error");
        })
    }
}

function createFilters(events){ 
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

    return {
        genres: allGenres,
        locations: allLocations
    }
}

function eventActionDispatch(response, filters) {
    console.log('load data success');
    return{
        type:"EVENT_SUCCESS",
        events: {
            events: response._embedded.events},
        genres: {
            genres: filters.genres },
        locations: {
            locations: filters.locations}
    }
}