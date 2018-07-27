import { sortByAlphabet } from './sortByAlphabet';

export function fetchReady(response) {

    const events = response._embedded.events
    const sortedEvents = sortByAlphabet(events);

    return {
        type: 'FETCH_READY',
        payload: sortedEvents
    }
}