import { sortSwitch } from './sortSwitch';

export function resetFiltering(events, sortByMethod) {

    const sortedEvents = sortSwitch(sortByMethod, events);
    
    return { 
        type: 'CLEAR_FILTERS',
        allEvents: sortedEvents
    }
}