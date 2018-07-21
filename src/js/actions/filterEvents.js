export const filterAction = (title, val) => {
    //console.log('val: ', val.target.value)
    /*
    if (title === 'Location') {
        const newEvents = events.filter(event => {
            return event._embedded.venues[0].city.name === e.target.value;
        });
        console.log(newEvents);
        return newEvents;
    }
    else if (title === 'Genre') {
        const newEvents = events.filter(event => {
            return event.classifications[0].genre.name === e.target.value;
        });
        console.log(newEvents);
        return newEvents;
    }*/

    

    if (val.hasOwnProperty('target')) {
        const value = val.target.value;
        const message = title === 'Location' ? 'FILTER_LOCATION' : 'FILTER_GENRE'
        
        /*return (dispatch) => {
            console.log('filter action') 
            return dispatch(filterActionDespatch(message, value));
        };*/

        console.log('filter action despatched')
        return {
            type: message,
            filter: value
        }
    }
}