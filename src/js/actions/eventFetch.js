import { addProperty } from './addProperty';
import { fetchReady } from './featchReady';
import { createFilters } from './createFilters';

export function loadData(){

    console.log('fetching events');

    let date = new Date();
    let month = (date.getMonth()+1) + '';
    month = month.length < 2 ? '0' + month : month;
    let day = (date.getDate() + '');
    day =  day.length < 2 ? '0' + day : day;
    
    const today = date.getFullYear() + '-' + month + '-' + day;

    date.setDate(date.getDate() + 6);
    month = (date.getMonth()+1) + '';
    month = month.length < 2 ? '0' + month : month;
    day = (date.getDate() + '');
    day =  day.length < 2 ? '0' + day : day;

    const nextWeek = date.getFullYear() + '-' + month + '-' + day;

    const url = 'https://app.ticketmaster.com/discovery/v2/events.JSON?classificationName=music&apikey=GEKqrkYNGL9POROireeB9D6fzdpWP8dj&page=0&size=50&marketId=204&startDateTime=' + today + 'T00:00:00Z&endDateTime=' + nextWeek + 'T23:59:00Z&includeTBA=no&includeTBD=no';

    return(dispatch)=>{
        return fetch(url)
        .then(res => res.json())
        .then((response)=>{
            dispatch(addProperty(response));
            dispatch(fetchReady(response));
        })
        .catch(function(error) {
            console.log('error: ', error);
        })
    }
}