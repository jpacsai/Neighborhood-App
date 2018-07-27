export function fetchReady(response) {
    console.log('response', response._embedded.events)
    return {
        type: 'FETCH_READY',
        payload: response._embedded.events
    }
}