export function getVenues(displayEvents) {
    const displayVenues = [];
    const ids = [];

    for (let i = 0; i < displayEvents.length; i++) {
        const eventVenueId = displayEvents[i]._embedded.venues[0].id;
        if (ids.includes(eventVenueId) === false) {
            ids.push(eventVenueId);

            const venueId = displayEvents[i]._embedded.venues[0].id;
            const venueName = displayEvents[i]._embedded.venues[0].name;
            const latitude = Number(displayEvents[i]._embedded.venues[0].location.latitude);
			const longitude = Number(displayEvents[i]._embedded.venues[0].location.longitude);
            
            const venueObj = {
                venueId,
                venueName,
                lat: latitude,
                lng: longitude,
                eventsArray : [displayEvents[i]]
            }

            displayVenues.push(venueObj);
        }
        else {
            const index = displayVenues.findIndex( venue => {
                return event[i]._embedded.venues[0].id === venue.venueId
            });
            displayVenues[index].eventsArray.push(event[i])
        }
    }

    console.log('displayVenues', displayVenues);

    return {
        type: 'VENUES',
        payload: displayVenues
    }
}

/*

- change logic:
move displayList-reducer into action, getVenues immediately, send it to state

- include it in: 
    - updateEvents
    - filtering
    - no match
    - clear filters

*/