export function addDateProperty(response) {
    console.log('add date', response._embedded.events);
    // const withDateObj = 
    return{
        type:"EVENT_FETCH_SUCCESS",
        events: {
            events: response._embedded.events},
    }
}