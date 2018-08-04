import escapeRegexp from 'escape-string-regexp';

export function searchEvents(event, eventList) {

    const val = event.target.value.trim();
    const match = new RegExp(escapeRegexp(val), 'i');
    const results = eventList.filter( (event) => {
        return match.test(event.name)
    });

    console.log('res',results)

    return {
        type: 'SEARCHING_EVENTS',
        searchResults: results
    }
}