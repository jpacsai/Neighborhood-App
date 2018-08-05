// creates filters from fetched data from Ticketmaster API

export function createFilters(events){ 

    const allLocations = [];
    const allDates = [];
    const allDatesObj = [];

    for (let i = 0; i < events.length; i++) {
        
        const location = events[i]._embedded.venues[0].city.name;
        const date = events[i].dates.start.localDate;
        const obj = events[i].dates.start.dateObj;

        if (allLocations.includes(location) === false) {
            allLocations.push(location);
        }

        if (allDates.includes(date) === false) {
            allDates.push(date);
            allDatesObj.push(obj);
        }
    }

    allLocations.sort();

    return {
        locations: allLocations,
        dates: allDates,
        datesObj: allDatesObj
    }
}