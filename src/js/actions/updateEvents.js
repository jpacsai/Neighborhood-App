import Geocode from "react-geocode";
import { createFilters } from './createFilters';
import { getVenues } from './getVenues';
import { sortByAlphabet } from './sortByAlphabet';
import { calcBounds } from './calcBounds';

Geocode.setApiKey("AIzaSyDhBkQX-hoe2X9j-6Lmzyb14Wh6TKpCqEU");

// adds missing properties to events, calculates bounds for map, create filters after fetch
// originally it was fetching coordinates for events with missing data from Google Geocode API but 
// because of quote limits I had to remove that functionality
export function updateEvents(list) {

    const events = list._embedded.events;

    const updatedList = addDate(events);

    const withCoords = updatedList.filter(event => {
        return event._embedded.venues[0].hasOwnProperty('location') === true
    })

    const filterLists = createFilters(withCoords);

    /*

    const toUpdate = updatedList.filter(event => {
        return event._embedded.venues[0].hasOwnProperty('location') === false
    })

    console.log(toUpdate)
    let promises = toUpdate.map(event => {
        const line1 = event._embedded.venues[0].address.line1;
        const city = event._embedded.venues[0].city.name;
        const name = event._embedded.venues[0].name;
        const address = `${name}, ${line1}, ${city}`
    
        return getCoords(address, event)
        .then( obj => {
            event._embedded.venues[0].location = obj;
            return event;
        })
    });
    */

    let allVenues = getVenues(withCoords);
    let sorted = sortByAlphabet(withCoords);
    let bounds = calcBounds(allVenues);

    return {
        type:"FETCH_READY",
        payload: sorted,
        locations: filterLists.locations,
        dates: filterLists.dates,
        datesObj: filterLists.datesObj,
        allVenues: allVenues,
        bounds: bounds
    }

    /* 

    // Wait for all Promises to complete
    return (dispatch) => {
        Promise.all(promises)
        .then(results => {
            return mergeWithCoords(results, updatedList);
        })
        .then((results) => {
                allVenues = getVenues(results)
                sorted = sortByAlphabet(results)
                bounds = calcBounds(allVenues)
        })
        .then(() => {
            const payloadObj = {
                type:"FETCH_READY",
                payload: sorted,
                locations: filterLists.locations,
                dates: filterLists.dates,
                datesObj: filterLists.datesObj,
                allVenues: allVenues,
                bounds: bounds
            }
            dispatch(payloadObj);
        })
        .catch(e => {
            console.error(e);
        })} */
}


function addDate(list) {
    const updatedList = list.map(event => { 
        const date = event.dates.start.localDate;
        const obj = new Date(date.slice(0,4), parseInt(date.slice(5, 7)-1, 10), parseInt(date.slice(8,10), 10));

        const display = String(obj).slice(0,15);

        event.dates.start.displayDate = display;
        event.dates.start.dateObj = obj;
        return event;
    });
    return updatedList;
}

/*
function getCoords(address) {
    return Geocode.fromAddress(address).then(
        response => {
            const { lat, lng } = response.results[0].geometry.location;
            return {
                latitude : String(lat),
                longitude : String(lng)
            }
        },
        error => {
            console.error(error);
        }
    )
}

function mergeWithCoords(results, updatedList) {
    const list = updatedList.slice(0);
    for (let i = 0; i < results.length; i++) {
        const resultLocation = results[i]._embedded.venues[0].location;
        const index = list.findIndex(event => {
            return event.id === results[i].id;
        })
        list[index]._embedded.venues[0].location = resultLocation;
    }
    return list;
}
*/