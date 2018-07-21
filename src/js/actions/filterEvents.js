export default function filterList(events, title, e) {
    if (title === 'Location') {
        const newEvents = events.filter(event => {
            return event._embedded.venues[0].city.name === e.target.value;
        });
        console.log(newEvents);
        return newEvents;
    }
    else if (title === 'Genre') {
        /*const newEvents = events.filter(event => {
            return event.classification[0].genre.name === e.target.value;
        });
        console.log()
        console.log(newEvents);
        return newEvents; */
    }
}

function filterAction(events) {
    return {
        type:"FILTER_LIST",
        events: 'sthing'
    }
}