export function applyFilter(){
    return(dispatch)=>{
        return 
        /*
        fetch(`https://app.ticketmaster.com/discovery/v2/events.JSON?apikey=GEKqrkYNGL9POROireeB9D6fzdpWP8dj&marketId=204&startDateTime=2018-07-19T15:44:00Z&endDateTime=2018-07-26T23:59:00Z&includeTBA=no&includeTBD=no`)
        .then(res => res.json())
        .then((response)=>{
            dispatch(eventAction(response));
        })
        .catch(function() {
            console.log("error");
        }); */ // CHANGE THIS
    }
}

export function filterAction(response){
    console.log('filter success');
    return{
        type:"FILTER_APPLIED",
        events: 'filtered-events'  // CHANGE THIS
    }
}