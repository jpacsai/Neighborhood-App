import { sortSwitch } from './sortSwitch';
import { calcBounds } from './calcBounds';

export function resetFiltering(events, sortByMethod, allVenues) {

    const sortedEvents = sortSwitch(events, sortByMethod);
    const bounds = calcBounds(allVenues);
    
    return { 
        type: 'CLEAR_FILTERS',
        allEvents: sortedEvents,
        allVenues,
        bounds
    }
}