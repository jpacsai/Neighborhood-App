import { sortSwitch } from './sortSwitch';

export function resetFiltering(events, sortByMethod, allVenues) {

    const sortedEvents = sortSwitch(events, sortByMethod);
    
    return { 
        type: 'CLEAR_FILTERS',
        allEvents: sortedEvents,
        allVenues
    }
}