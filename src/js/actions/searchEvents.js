import escapeRegexp from 'escape-string-regexp';
import { getVenues } from './getVenues';
import { calcBounds } from './calcBounds';

// search event list by name
export function searchEvents(event, eventList) {

    const val = event.target.value.trim();
    const match = new RegExp(escapeRegexp(val), 'i');
    const results = eventList.filter( (event) => {
        return match.test(event.name)
    });

    if (results.length === 0) {
        const bounds = calcBounds(eventList);
        return {
            type: 'NO_MATCHING_SEARCHED_EVENTS',
            searchResults: [],
            venues: null,
            bounds
        }
    }

    else {
        const venues = getVenues(results);
        const bounds = calcBounds(venues);
        return {
            type: 'SEARCHING_EVENTS',
            searchResults: results,
            venues,
            bounds 
        }
    }
}