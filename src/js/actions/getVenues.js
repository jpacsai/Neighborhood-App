// extracts single venues from fetch list of events
export function getVenues(displayEvents) {
    const displayVenues = [];
    const ids = [];

    for (let i = 0; i < displayEvents.length; i++) {
        const eventVenueId = displayEvents[i]._embedded.venues[0].id;
        if (ids.includes(eventVenueId) === false) {
            ids.push(eventVenueId);

            const obj = displayEvents[i]._embedded.venues[0];

            const venueId = obj.id;
            const venueName = obj.name;
            const latitude = Number(obj.location.latitude);
            const longitude = Number(obj.location.longitude);
            const venueAddress = obj.address.line1 + ', ' + obj.city.name + ', ' + obj.postalCode;
            const venueCity = obj.city.name;
            
            const venueObj = {
                venueId,
                venueName,
                lat: latitude,
                lng: longitude,
                venueAddress,
                venueCity,
                eventsArray : [displayEvents[i]]
            }

            displayVenues.push(venueObj);
        }
        else {
            const index = displayVenues.findIndex( venue => {
                return displayEvents[i]._embedded.venues[0].id === venue.venueId
            });
            displayVenues[index].eventsArray.push(displayEvents[i])
        }
    }

    console.log('displayVenues', displayVenues);

    return displayVenues;
}