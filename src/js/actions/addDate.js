export function addDateProperty(response) {
    console.log('add date', response._embedded.events);
    const events = response._embedded.events;
    const addDateObj = events.map(event => { 
        const date = event.dates.start.localDate;
        const obj = new Date(date.slice(0,4), parseInt(date.slice(5, 7)-1, 10), parseInt(date.slice(8,10), 10));
        event.dates.start.dateObj = obj;
        return event;
    });

    return{
        type:"EVENT_FETCH_SUCCESS",
        events: {
            events: addDateObj
        }
    }
}