import { switchSort } from './switchSort';

export function resetFiltering(events, sortByMethod) {

    const sortedEvents = switchSort(sortByMethod, events);
    
    return { 
        type: 'CLEAR_FILTERS',
        allEvents: sortedEvents
    }
}