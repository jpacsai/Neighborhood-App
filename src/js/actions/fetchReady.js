import { sortByAlphabet } from './sortByAlphabet';
import { fetchReady } from './fetchReady';

// sorts events into alphabetical order by default
export function fetchReady(response) {

    const events = response._embedded.events;
    const sortedEvents = sortByAlphabet(events);

    return fetchReadyDespatcher(sortedEvents);
}

function fetchReadyDespatcher(sortedEvents) {
    return {
        type: 'FETCH_READY',
        payload: sortedEvents
    }
}