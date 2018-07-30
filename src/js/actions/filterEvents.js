import { sortSwitch } from './sortSwitch';
import { getVenues } from './getVenues';

export function filterEvents (e, events, locationFilter, dateFilter, sortByMethod) {

    e.preventDefault();

    // Sat Jul 28 2018 12:00:00 GMT+0200 (közép-európai nyári idő)  ==> "2018-07-28"
    const allDates = dateFilter.map((date) => {
        
        let month = (date.getMonth()+1) + '';
        month = month.length < 2 ? '0' + month : month;

        let day = (date.getDate() + '');
        day =  day.length < 2 ? '0' + day : day;
    
        return date.getFullYear() + '-' + month + '-' + day;
    })

    const filteredEvents = events.filter((event) => {
        return (
            (locationFilter.length > 0 && allDates.length > 0) ?
                locationFilter.includes(event._embedded.venues[0].city.name) && allDates.includes(event.dates.start.localDate) :
                (locationFilter.length === 0 && allDates.length === 0) ?
                    events :
                    allDates.length === 0 ?
                        locationFilter.includes(event._embedded.venues[0].city.name) :
                        allDates.includes(event.dates.start.localDate)
        )
    });

    console.log('filtered events :', venues);
    

    let message;
    let displayEvents;
    let venues;
    
    if (filteredEvents.length === 0) {
        message = 'NO_MATCHING_FILTERED_EVENTS';
        displayEvents = 'no match found';
        venues = [];
    }
    else {
        message = 'FILTERING_EVENTS';
        displayEvents = sortSwitch(sortByMethod, filteredEvents);
        venues = getVenues(filteredEvents);
    }
    
    return filterEventsDispatcher(message, displayEvents, venues);
}

function filterEventsDispatcher(message, displayEvents, venues) {
    return {
        type: message,
        filteredEvents: displayEvents,
        venues
    }
}