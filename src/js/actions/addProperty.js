import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyA5ivLlpxg-AwsOTPELxcuO1zQ64Vo6yRo");

export function addProperty(list) {

    const events = list._embedded.events;

    const updatedList = addLocation(addDate(events));

    return{
        type:"EVENT_FETCH_SUCCESS",
        events: {
            events: updatedList
        }
    }
}

function addDate(list) {
    
    const updatedList = list.map(event => { 
        const date = event.dates.start.localDate;
        const obj = new Date(date.slice(0,4), parseInt(date.slice(5, 7)-1, 10), parseInt(date.slice(8,10), 10));
        event.dates.start.dateObj = obj;
        return event;
    });

    return updatedList;
}

function addLocation(list) {

    const updatedList = list.map(event => {
        if (event._embedded.venues[0].hasOwnProperty('location') === false) {

            const line1 = event._embedded.venues[0].address.line1;
            const city = event._embedded.venues[0].city.name;
            const name = event._embedded.venues[0].name;

            const address = `${name}, ${line1}, ${city}`

            Geocode.fromAddress(address).then(
                response => {
                    const { lat, lng } = response.results[0].geometry.location;
                    event._embedded.venues[0].location = {
                        latitude : String(lat),
                        longitude : String(lng)
                    }
                    console.log('updated');
                },
                error => {
                    console.error(error);
                }
            );
        }
        return event;
    });

    return updatedList;
}