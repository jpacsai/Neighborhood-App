export function loadData(){
    console.log('fetching events')
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
            dispatch(loadDataDispatcher(response));
        })
        .catch(function(error) {
            console.log('error: ', error);
        })
    }
}

function loadDataDispatcher(response) {
    console.log('load data success');
    return{
        type:"EVENT_FETCH_SUCCESS",
        events: {
            events: response._embedded.events},
    }
}